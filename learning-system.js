const lessons = PMQ_TOPICS;
let current = null;
let step = 0;
let lifeApplyIndex = 0;

const KEY = "pmqLearnStateV5";

function esc(s) {
  return String(s ?? "").replace(/[&<>"]/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  }[c]));
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify({
    topic: current?.id || null,
    step,
    lifeApplyIndex
  }));
}

function root() {
  return document.getElementById("app");
}

function progress() {
  const labels = ["Meet", "Connect", "Recognise", "Build", "Apply", "Retrieve", "Explain"];
  return `<div class="pmq-steps" aria-label="Lesson progress">
    ${labels.map((x, i) => `<span class="${i <= step ? "on" : ""}" title="${x}">${i + 1}</span>`).join("")}
  </div>`;
}

function context(topic, task) {
  return `<section class="pmq-current-context">
    <div><b>YOU ARE LEARNING:</b> ${esc(topic.title)}</div>
    <div><b>YOUR JOB:</b> ${esc(task)}</div>
    <small>🧸 Interrupted? Come back here first. This tells you exactly what you were doing.</small>
  </section>`;
}

function buttonBar(nextLabel = "Next") {
  return `<div class="pmq-actions">
    <button class="pmq-secondary" id="backMenu">← Learning menu</button>
    ${step > 0 ? `<button class="pmq-secondary" id="previous">Previous</button>` : ""}
    <button class="pmq-primary" id="nextStep">${esc(nextLabel)}</button>
  </div>`;
}

function renderMenu() {
  const state = load();
  root().innerHTML = `
    <div class="pmq-learn-shell">
      <section class="pmq-hero">
        <div class="pmq-kicker">5-MINUTE LEARNING</div>
        <h1>Learn PMQ from zero</h1>
        <p>One concept at a time. Learn it first, then retrieve and apply it. You do not need to know the answer before starting.</p>
      </section>

      <div class="pmq-notice">
        <strong>How this works:</strong> Meet → Connect → Recognise → Build → Apply → Retrieve → Explain.
        If you get interrupted, the screen always tells you what you are learning and what you are doing.
      </div>

      ${state.topic ? `
      <section class="pmq-lesson">
        <h2>Continue where you stopped</h2>
        <p><strong>${esc(lessons.find(x => x.id === state.topic)?.title || "Your lesson")}</strong> — step ${(state.step ?? 0) + 1} of 7.</p>
        <button class="pmq-primary" id="continueLesson">Continue</button>
      </section>` : ""}

      <section class="pmq-lesson">
        <h2>Choose a topic</h2>
        <p>You have <strong>${lessons.length} learning objectives</strong> in this system.</p>
        <div class="pmq-topic-list">
          ${lessons.map(l => `<button class="pmq-topic" data-topic="${esc(l.id)}">
            <span>○</span><b>${esc(l.title)}</b><small>${esc(l.area)}</small>
          </button>`).join("")}
        </div>
      </section>
    </div>`;

  document.querySelectorAll("[data-topic]").forEach(b =>
    b.addEventListener("click", () => start(b.dataset.topic))
  );

  document.getElementById("continueLesson")?.addEventListener("click", () => {
    const s = load();
    if (s.topic) start(s.topic, s.step || 0, s.lifeApplyIndex || 0);
  });
}

function start(id, s = 0, lifeIndex = 0) {
  current = lessons.find(x => x.id === id) || lessons[0];
  step = Math.max(0, Math.min(6, Number(s) || 0));
  lifeApplyIndex = Number(lifeIndex) || 0;
  save();
  renderStep();
}

function recognitionData(l) {
  // Life cycles needs to recognise the specific model approach, not the whole "life cycles" topic.
  if (l.id === "life-cycles") {
    const models = l.applyScenarios || [];
    const target = models[lifeApplyIndex % Math.max(models.length, 1)] || models[2];
    return {
      instruction: "Which life cycle/model approach is this scenario describing?",
      scenario: target?.scenario || l.scenario,
      answer: target?.model || "Iterative",
      options: models.map(x => x.model).filter(Boolean)
    };
  }

  return {
    instruction: "Which PMQ concept is this scenario testing?",
    scenario: l.scenario,
    answer: l.title,
    options: [l.title, ...lessons.filter(x => x.id !== l.id).map(x => x.title)
      .sort(() => Math.random() - 0.5).slice(0, 3)]
  };
}

function buildData(l) {
  const first = l.know?.[0] || l.summary;
  // Prefer a short keyword from the first knowledge statement, but always give a useful prompt.
  const match = first.match(/\b(linear|iterative|hybrid|governance|sustainability|business case|benefits|risk|issue|change|quality|requirements|schedule|resources|budget|stakeholder|leadership|conflict|procurement|transition|assurance|review|output|outcome)\b/i);
  const keyword = match ? match[0] : null;
  return { statement: first, keyword };
}

function applyData(l) {
  if (l.id === "life-cycles" && Array.isArray(l.applyScenarios) && l.applyScenarios.length) {
    const item = l.applyScenarios[lifeApplyIndex % l.applyScenarios.length];
    return {
      scenario: item.scenario,
      answer: item.answer,
      checklist: [item.model + " is the best fit.", ...(l.distinctions || []).filter(x => x.toLowerCase().includes(item.model.toLowerCase())).slice(0, 1)]
    };
  }

  return {
    scenario: l.scenario,
    answer: l.applyAnswer || (l.apply || []).join(" "),
    checklist: l.apply || []
  };
}

function renderStep() {
  const l = current;
  let task = "";
  let body = "";

  if (step === 0) {
    task = `Read the short introduction to ${l.title}. You are learning the core idea, not testing yourself yet.`;
    body = `
      <h2>1. Meet the idea</h2>
      <p class="pmq-big">${esc(l.summary)}</p>
      <h3>Know these points</h3>
      <ul>${(l.know || []).slice(0, 4).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  }

  if (step === 1) {
    task = `Connect ${l.title} to something you already understand. Type one example from your own life or work.`;
    body = `
      <h2>2. Connect it to real life</h2>
      <p>Do not try to write a perfect PMQ answer. Think of something you already understand and connect it to this idea.</p>
      <div class="pmq-life-box">
        <strong>Try one:</strong> your website project, work/HR, nursery routines, family planning, driving, kickboxing, or another real situation you know well.
      </div>
      <label for="connectAnswer"><strong>My example:</strong></label>
      <textarea id="connectAnswer" class="pmq-textarea" placeholder="For example: I can see this in..."></textarea>
      <p class="pmq-muted">Your answer is for learning, not marking. You are building a memory hook.</p>`;
  }

  if (step === 2) {
    const r = recognitionData(l);
    task = r.instruction;
    body = `
      <h2>3. Recognise it</h2>
      <p><strong>${esc(r.instruction)}</strong></p>
      <div class="pmq-scenario"><strong>Scenario:</strong><p>${esc(r.scenario)}</p></div>
      <div id="recognitionChoices">
        ${r.options.map(o => `<button class="pmq-choice" data-answer="${esc(o)}">${esc(o)}</button>`).join("")}
      </div>
      <div id="recognitionFeedback"></div>
      <div class="pmq-hint"><strong>Not sure?</strong> Look for the clues in the scenario. You are only identifying the best label at this stage.</div>`;
  }

  if (step === 3) {
    const b = buildData(l);
    task = `Build the idea in your own words. Use the sentence as a clue, then write what the missing idea means.`;
    body = `
      <h2>4. Build the memory</h2>
      <p><strong>Complete this idea:</strong></p>
      <div class="pmq-gap-card">${esc(b.statement)}</div>
      <label for="buildAnswer"><strong>Now put it into your own words:</strong></label>
      <textarea id="buildAnswer" class="pmq-textarea" placeholder="Write what this means in plain English..."></textarea>
      <button class="pmq-primary" id="revealBuild">Reveal the key points</button>
      <div id="buildModel" class="pmq-model hidden">
        <strong>Key points to have:</strong>
        <ul>${(l.know || []).slice(0, 3).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <p><strong>Key words:</strong> ${(b.keyword || l.title).split(/\s+/).map(x => `<span class="pmq-keyword">${esc(x)}</span>`).join(" ")}</p>
      </div>`;
  }

  if (step === 4) {
    const a = applyData(l);
    task = `Apply ${l.title} to the scenario. Write your answer first. Then reveal the model answer and compare it.`;
    body = `
      <h2>5. Apply it</h2>
      <div class="pmq-scenario"><strong>Scenario:</strong><p>${esc(a.scenario)}</p></div>
      <label for="applyAnswer"><strong>Your answer:</strong></label>
      <textarea id="applyAnswer" class="pmq-textarea" placeholder="What would you choose/do, and why?"></textarea>
      <button class="pmq-primary" id="revealApply">Reveal model answer</button>
      <div id="applyModel" class="pmq-model hidden">
        <h3>Model answer</h3>
        <p>${esc(a.answer)}</p>
        <h4>What your answer should connect</h4>
        <ul>${(a.checklist || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>
      ${l.id === "life-cycles" ? `
        <div class="pmq-life-practice">
          <h3>Life-cycle practice deck</h3>
          <p>There are six different model approaches here. You can do another one without leaving this lesson.</p>
          <button class="pmq-secondary" id="anotherLifeScenario">Try another life-cycle scenario</button>
        </div>` : ""}`;
  }

  if (step === 5) {
    task = `Retrieve the key knowledge about ${l.title} without looking back. Then reveal the checklist.`;
    body = `
      <h2>6. Retrieve it</h2>
      <p><strong>Without scrolling back:</strong> write or say three things you know about <strong>${esc(l.title)}</strong>.</p>
      <textarea id="retrieve" class="pmq-textarea" placeholder="What can you remember?"></textarea>
      <button class="pmq-primary" id="revealRetrieve">Reveal checklist</button>
      <div id="retrieveModel" class="pmq-model hidden">
        <strong>Checklist</strong>
        <ul>${(l.know || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`;
  }

  if (step === 6) {
    task = `Explain ${l.title} in your own words. Say what it is, why it matters, and how it affects a project.`;
    body = `
      <h2>7. Explain it</h2>
      <p><strong>What are you explaining?</strong> ${esc(l.title)}</p>
      <p>Imagine you are explaining it to Molly from yesterday, who knows absolutely nothing about project management.</p>
      <textarea id="explain" class="pmq-textarea" placeholder="Explain ${esc(l.title)} in your own words..."></textarea>
      <button class="pmq-primary" id="revealExplain">Reveal model checklist</button>
      <div id="explainModel" class="pmq-model hidden">
        <h3>Model checklist</h3>
        <ul>
          <li>Defines <strong>${esc(l.title)}</strong> accurately.</li>
          <li>Explains why it matters to project delivery or decision-making.</li>
          <li>Uses the correct PMQ terminology.</li>
          ${(l.distinctions || []).slice(0, 2).map(x => `<li>${esc(x)}</li>`).join("")}
        </ul>
      </div>`;
  }

  root().innerHTML = `
    <div class="pmq-learn-shell">
      ${progress()}
      ${context(l, task)}
      <section class="pmq-lesson">${body}</section>
      ${buttonBar(step === 6 ? "Finish lesson" : "Next")}
    </div>`;

  wireStep();
}

function wireStep() {
  document.getElementById("backMenu")?.addEventListener("click", renderMenu);

  document.getElementById("previous")?.addEventListener("click", () => {
    step = Math.max(0, step - 1);
    save();
    renderStep();
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  document.getElementById("nextStep")?.addEventListener("click", () => {
    if (step < 6) {
      step++;
      save();
      renderStep();
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      localStorage.setItem("pmqLastCompleted", current.id);
      renderComplete();
    }
  });

  if (step === 2) {
    const r = recognitionData(current);
    document.querySelectorAll(".pmq-choice").forEach(btn => {
      btn.addEventListener("click", () => {
        const ok = btn.dataset.answer === r.answer;
        document.querySelectorAll(".pmq-choice").forEach(b => b.disabled = true);
        btn.classList.add(ok ? "correct" : "wrong");
        document.getElementById("recognitionFeedback").innerHTML = `
          <div class="pmq-result">
            <strong>${ok ? "Correct." : "Not quite."}</strong>
            <p>${ok
              ? `You correctly recognised <strong>${esc(r.answer)}</strong>.`
              : `The best answer is <strong>${esc(r.answer)}</strong>. Look at the clues again — this is recognition practice, not an exam mark.`}</p>
          </div>`;
      });
    });
  }

  if (step === 3) {
    document.getElementById("revealBuild")?.addEventListener("click", () =>
      document.getElementById("buildModel").classList.remove("hidden")
    );
  }

  if (step === 4) {
    document.getElementById("revealApply")?.addEventListener("click", () =>
      document.getElementById("applyModel").classList.remove("hidden")
    );

    document.getElementById("anotherLifeScenario")?.addEventListener("click", () => {
      lifeApplyIndex = (lifeApplyIndex + 1) % (current.applyScenarios?.length || 1);
      save();
      renderStep();
    });
  }

  if (step === 5) {
    document.getElementById("revealRetrieve")?.addEventListener("click", () =>
      document.getElementById("retrieveModel").classList.remove("hidden")
    );
  }

  if (step === 6) {
    document.getElementById("revealExplain")?.addEventListener("click", () =>
      document.getElementById("explainModel").classList.remove("hidden")
    );
  }
}

function renderComplete() {
  root().innerHTML = `
    <div class="pmq-complete">
      <div class="pmq-kicker">LESSON COMPLETE</div>
      <h1>${esc(current.title)}</h1>
      <p>You have met it, connected it, recognised it, built it, applied it, retrieved it and explained it.</p>
      <p><strong>That is enough for one short session.</strong> You do not need to immediately repeat it.</p>
      <div class="pmq-actions">
        <button class="pmq-primary" id="nextTopic">Next topic</button>
        <button class="pmq-secondary" id="menu">Learning menu</button>
      </div>
    </div>`;

  document.getElementById("nextTopic").onclick = () => {
    const i = lessons.findIndex(x => x.id === current.id);
    start(lessons[(i + 1) % lessons.length].id);
  };
  document.getElementById("menu").onclick = renderMenu;
}

const params = new URLSearchParams(location.search);
renderMenu();
if (params.get("topic")) start(params.get("topic"));
