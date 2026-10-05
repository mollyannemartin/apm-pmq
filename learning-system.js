
/* PMQ 5-Minute Learning System
   Built to teach before testing: Meet -> Understand -> Connect -> Recognise ->
   Guided Apply -> Retrieve -> Explain -> Exam -> Review.
*/
(function(){
  "use strict";

  const lessons = [
    {
      id:"project-bau", topic:"Projects vs BAU", area:"Setting Up for Success",
      anchor:"website",
      title:"What makes something a project?",
      teach:"A project is unique and temporary, with planned objectives. BAU is ongoing, repetitive work that keeps an organisation operating.",
      chunks:[
        {title:"The simple idea", text:"A project creates or changes something with a defined objective and an end. BAU keeps something running."},
        {title:"The three clues", text:"Look for: unique work, a defined beginning/end, and a planned objective."}
      ],
      keywords:["unique","temporary","defined start and finish","objectives"],
      life:"Your welfare website was a project while you planned, built, tested and delivered it. Updating it routinely afterwards is BAU.",
      recognise:[
        ["Building a new website over six months","Project",true],
        ["Checking the finished website every week","BAU",true],
        ["Creating a new booking system","Project",true],
        ["Processing the same routine request every month","BAU",true]
      ],
      gap:"A project is ______ and ______, whereas BAU is ongoing and repetitive.",
      gapAnswers:["unique","temporary"],
      apply:"A team spends 12 months designing, developing and implementing a new system. Staff then use it every day. Which part is the project and which is BAU?",
      model:"The design, development and implementation are the project because they are temporary work with a defined objective and end. Using the completed system every day is BAU because it is ongoing.",
      exam:"Explain the difference between a project and BAU, using the scenario to support your answer."
    },
    {
      id:"risk-issue", topic:"Risk vs Issue", area:"Planning & Managing Deployment",
      anchor:"driving",
      title:"Risk or issue?",
      teach:"A risk is an uncertainty that may affect objectives. An issue is something that has happened, or is forecast to require management action.",
      chunks:[
        {title:"The key word", text:"Think: MIGHT = risk. HAS HAPPENED / NEEDS ACTION = issue."},
        {title:"Why the distinction matters", text:"A risk can be assessed and responses planned. An issue needs active management and may need escalation or a decision."}
      ],
      keywords:["uncertainty","might","has happened","management action","escalation"],
      life:"Driving: 'There might be traffic' is a risk. Once you're actually stuck in traffic and it threatens your arrival, it is an issue.",
      recognise:[
        ["The supplier might be late","Risk",true],
        ["The supplier confirms it is two weeks late","Issue",true],
        ["There may be a shortage of staff next month","Risk",true],
        ["The required developer is off sick today","Issue",true]
      ],
      gap:"A risk is an ______ that may affect objectives.",
      gapAnswers:["uncertainty"],
      apply:"A supplier says delivery may be two weeks late. The project manager has not yet confirmed that the delay will occur. Is this a risk or issue, and why?",
      model:"It is a risk because the delay is still uncertain. The possibility may affect the project, so the PM can assess the risk and plan an appropriate response.",
      exam:"A supplier then confirms that delivery will be two weeks late. Explain how the PM should now treat the situation differently."
    },
    {
      id:"stakeholders", topic:"Stakeholders", area:"People & Behaviours",
      anchor:"website",
      title:"Who matters to the project?",
      teach:"A stakeholder is a person, group or organisation that can affect, be affected by, or perceive itself to be affected by a project.",
      chunks:[
        {title:"Think wider than the project team", text:"Stakeholders can include users, sponsors, customers, suppliers, managers, regulators and people affected by the outcome."},
        {title:"Why they matter", text:"Different stakeholders have different interests, influence, needs and expectations. Good engagement helps the project make informed decisions and manage expectations."}
      ],
      keywords:["person","group","organisation","affect","affected","interests","influence"],
      life:"For your website, the intended users, people giving feedback, those approving content and people responsible for hosting/access can all have different interests.",
      recognise:[
        ["A person who can influence a project","Stakeholder",true],
        ["A group affected by the outcome","Stakeholder",true],
        ["A project objective","Not a stakeholder",true],
        ["A website page","Not a stakeholder",true]
      ],
      gap:"Stakeholders can ______, be ______ by, or perceive themselves to be affected by a project.",
      gapAnswers:["affect","affected"],
      apply:"A project has senior leaders who control funding, staff who will use the system, and an external supplier. Why should the PM treat these groups as stakeholders even though they have different roles?",
      model:"They can each affect or be affected by the project. Their influence, interests and expectations differ, so the PM needs to understand and engage them appropriately.",
      exam:"Explain how understanding stakeholder influence and interests can improve project decision-making."
    },
    {
      id:"change-control", topic:"Change Control", area:"Planning & Managing Deployment",
      anchor:"website",
      title:"Why can't we just add the feature?",
      teach:"A proposed change should be assessed before it is accepted. The PM needs to understand its impact and ensure the change remains governed and aligned with requirements and objectives.",
      chunks:[
        {title:"The first question", text:"Do not ask only 'Can we do it?' Ask 'What does it change?'"},
        {title:"Think impact", text:"Consider relevant effects such as scope, time, cost, resources, risk and quality, then follow the project's agreed change process."}
      ],
      keywords:["impact","scope","time","cost","resources","risk","quality","governance"],
      life:"On your website, adding a new feature after development has started could mean more coding, testing, time and stakeholder approval.",
      recognise:[
        ["Assess impact before accepting a proposed change","Good change control",true],
        ["Add every request immediately","Poor change control",true],
        ["Ignore the project's objectives","Poor change control",true],
        ["Check effects on time and resources","Good change control",true]
      ],
      gap:"Before accepting a change, assess its ______ on the project.",
      gapAnswers:["impact"],
      apply:"A new feature needs two developers for three weeks, but the launch date is fixed. What should the PM consider before accepting it?",
      model:"The PM should assess the impact on resources and schedule, alongside other relevant constraints such as cost, risk, quality and scope. Because the launch date is fixed, the schedule impact is particularly important.",
      exam:"Explain why accepting a seemingly small change without assessment can threaten project success."
    },
    {
      id:"linear", topic:"Linear Life Cycle", area:"Setting Up for Success",
      anchor:"driving",
      title:"When does a linear approach make sense?",
      teach:"A linear approach uses defined stages in a planned sequence. It is more suitable when requirements and scope are stable and predictable.",
      chunks:[
        {title:"Picture it", text:"Plan → design → build → test → implement. Each stage has a defined place in the sequence."},
        {title:"The clue", text:"Stable requirements and predictable work make a planned sequence more practical."}
      ],
      keywords:["defined stages","planned sequence","stable scope","predictable","planned sequencing"],
      life:"Driving a familiar route is similar: destination, route and timing can be planned in advance when conditions are stable.",
      recognise:[
        ["Requirements are stable and well understood","Linear may fit",true],
        ["Users need repeated experiments to discover what they want","Iterative may fit",true],
        ["Work must follow defined stages","Linear may fit",true],
        ["Frequent feedback will reshape requirements","Linear is less suitable",true]
      ],
      gap:"A linear life cycle uses defined stages in a planned ______.",
      gapAnswers:["sequence"],
      apply:"A project has stable requirements, a well-understood solution and formal stages that must be completed in order. Which approach may be appropriate?",
      model:"A linear approach may be appropriate because the requirements are stable and the work can be planned through defined stages in sequence.",
      exam:"Explain why a linear approach would be less suitable where requirements are expected to change frequently."
    },
    {
      id:"iterative", topic:"Iterative Life Cycle", area:"Setting Up for Success",
      anchor:"website",
      title:"Learning by building and refining",
      teach:"An iterative approach develops through repeated cycles of work, feedback and refinement. It is useful when learning and evolving requirements are important.",
      chunks:[
        {title:"The loop", text:"Build → review → learn → refine → repeat."},
        {title:"The clue", text:"If you do not know everything at the start and need feedback to improve the solution, look for iterative thinking."}
      ],
      keywords:["repeated cycles","feedback","refinement","learning","evolving requirements"],
      life:"When you build a website, show an early version, receive feedback and refine the page, you're using iterative thinking.",
      recognise:[
        ["Early version followed by feedback and refinement","Iterative",true],
        ["Everything must be fixed before work starts","Less iterative",true],
        ["Learning changes the next cycle","Iterative",true],
        ["Requirements evolve through feedback","Iterative",true]
      ],
      gap:"Iterative work uses repeated cycles of feedback and ________.",
      gapAnswers:["refinement"],
      apply:"Users cannot fully describe what they need until they see an early version. Which approach could help and why?",
      model:"An iterative approach could help because users can review an early version, provide feedback and use that learning to refine the next cycle.",
      exam:"Explain one advantage and one potential challenge of using an iterative approach."
    },
    {
      id:"output-outcome-benefit", topic:"Output, Outcome & Benefit", area:"Preparing for Change",
      anchor:"website",
      title:"What did we deliver — and what changed?",
      teach:"An output is what the project delivers. An outcome is the change that results from using the output. A benefit is the measurable improvement or advantage resulting from that change.",
      chunks:[
        {title:"Think in a chain", text:"Output → used → Outcome → creates → Benefit."},
        {title:"Website example", text:"Output: new booking website. Outcome: people use online booking instead of the old process. Benefit: improved efficiency or user experience, if that improvement is realised."}
      ],
      keywords:["output","delivers","outcome","change","benefit","measurable improvement"],
      life:"Your website itself is the output. People actually using it changes the process; the improvement achieved from that change is the benefit.",
      recognise:[
        ["The completed website","Output",true],
        ["Users move to online booking","Outcome",true],
        ["Reduced admin effort","Benefit",true],
        ["A planned objective","Not automatically a benefit",true]
      ],
      gap:"Output → ________ → Benefit.",
      gapAnswers:["Outcome"],
      apply:"A project delivers a digital booking system. Staff then use it instead of processing bookings manually, reducing administration time. Identify the output, outcome and benefit.",
      model:"Output: the digital booking system. Outcome: staff use it instead of the manual process. Benefit: reduced administration time.",
      exam:"Explain why delivering the output does not automatically mean the intended benefits have been realised."
    }
  ];

  const lifeMap={
    website:{name:"💻 Welfare website & coding",desc:"Your real website project: requirements, coding, feedback, access, delivery and changes."},
    work:{name:"🪖 Army / work / IHUB",desc:"Requests, stakeholders, deadlines, assurance, recurring BAU and organisational processes."},
    kickboxing:{name:"🥊 Kickboxing",desc:"Training, feedback, sequencing, resources, improvement and performance."},
    driving:{name:"🚗 Driving",desc:"Routes, timing, uncertainty, tolerances, dependencies and adapting to conditions."},
    family:{name:"👨‍👩‍👧 Family / nursery / days out",desc:"Schedules, constraints, dependencies, resources, priorities and contingencies."},
    court:{name:"⚖️ Multi-stakeholder processes",desc:"An abstract process with competing interests, information dependencies, deadlines and decisions."}
  };

  const stateKey="pmq5min_state_v1";
  let state=JSON.parse(localStorage.getItem(stateKey)||'{"done":{},"weak":{},"streak":0}');
  let current=null, step=0;

  function save(){localStorage.setItem(stateKey,JSON.stringify(state));}
  function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function rootEl(){return document.getElementById("pmq-learning-app");}
  function render(html){rootEl().innerHTML=html; window.scrollTo({top:0,behavior:"smooth"});}

  function menu(){
    const completed=Object.keys(state.done).length;
    render(`
      <div class="pmq-learn-shell">
        <div class="pmq-hero">
          <span class="pmq-kicker">PMQ TRAINING SYSTEM</span>
          <h2>⚡ 5-Minute Learn With Me</h2>
          <p>You're learning PMQ from scratch. We teach first, then ask you to use it.</p>
          <div class="pmq-progress"><span style="width:${Math.min(100,completed/lessons.length*100)}%"></span></div>
          <small>${completed}/${lessons.length} mini-lessons completed</small>
        </div>
        <div class="pmq-mode-grid">
          <button class="pmq-card" data-action="quick"><b>⚡ I've got 5 minutes</b><span>One small lesson. Stop whenever you need to.</span></button>
          <button class="pmq-card" data-action="continue"><b>▶ Continue learning</b><span>Pick up where you left off.</span></button>
          <button class="pmq-card" data-action="life"><b>🧠 Make it make sense</b><span>Connect PMQ to your own life.</span></button>
          <button class="pmq-card" data-action="weak"><b>🚨 My weak areas</b><span>${Object.keys(state.weak).length} topics need another go.</span></button>
        </div>
        <h3 class="pmq-subtitle">Choose a topic</h3>
        <div class="pmq-topic-list">
          ${lessons.map(l=>`<button class="pmq-topic ${state.done[l.id]?'is-done':''}" data-lesson="${l.id}">
            <span>${state.done[l.id]?'✓':'○'}</span><b>${esc(l.topic)}</b><small>${esc(l.area)}</small>
          </button>`).join("")}
        </div>
      </div>`);
  }

  function chooseQuick(){
    const next=lessons.find(l=>!state.done[l.id])||lessons[Math.floor(Math.random()*lessons.length)];
    start(next.id);
  }
  function continueLearning(){
    const next=lessons.find(l=>!state.done[l.id])||lessons[0];
    start(next.id);
  }
  function weak(){
    const ids=Object.keys(state.weak);
    const l=lessons.find(x=>ids.includes(x.id));
    if(l) start(l.id); else menu();
  }

  function start(id){
    current=lessons.find(l=>l.id===id)||lessons[0]; step=0; showStep();
  }

  function header(){
    return `<div class="pmq-step-head"><button class="pmq-back" data-action="menu">← Learn menu</button><span>${esc(current.area)}</span><b>${esc(current.topic)}</b></div>`;
  }

  function showStep(){
    const l=current;
    let body="";
    if(step===0){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">1 · MEET THE IDEA</span>
        <h2>${esc(l.title)}</h2>
        <p class="pmq-big">${esc(l.teach)}</p>
        <div class="pmq-chunks">${l.chunks.map(c=>`<article><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("")}</div>
        <button class="pmq-primary" data-action="next">I've read it →</button>
      </div>`;
    } else if(step===1){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">2 · MAKE IT MAKE SENSE</span>
        <h2>Connect it to your world</h2>
        <div class="pmq-life-box"><b>${esc(lifeMap[l.anchor]?.name||"Your life")}</b><p>${esc(l.life)}</p></div>
        <p>Don't memorise the example. Use it as a hook for the PMQ idea.</p>
        <button class="pmq-primary" data-action="next">I see the connection →</button>
      </div>`;
    } else if(step===2){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">3 · RECOGNISE</span>
        <h2>Can you spot it?</h2>
        <p>You're not expected to explain it yet. Just identify the best label.</p>
        <div id="recognise-list">${l.recognise.map((r,i)=>`<button class="pmq-choice" data-rec="${i}"><span>${esc(r[0])}</span><b>?</b></button>`).join("")}</div>
        <div id="rec-result" class="pmq-result"></div>
        <button class="pmq-primary hidden" id="rec-next" data-action="next">Guided practice →</button>
      </div>`;
    } else if(step===3){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">4 · BUILD IT</span>
        <h2>Build the idea</h2>
        <p>${esc(l.gap)}</p>
        <input id="gap-input" class="pmq-input" placeholder="Type the missing word…" autocomplete="off">
        <div class="pmq-wordbank">${l.keywords.map(k=>`<button data-word="${esc(k)}">${esc(k)}</button>`).join("")}</div>
        <button class="pmq-primary" data-action="check-gap">Check</button>
        <div id="gap-result" class="pmq-result"></div>
      </div>`;
    } else if(step===4){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">5 · GUIDED APPLICATION</span>
        <h2>Use the idea</h2>
        <div class="pmq-scenario"><b>Scenario</b><p>${esc(l.apply)}</p></div>
        <p>Choose the clue or reasoning that best supports your answer.</p>
        <div class="pmq-apply-options">
          ${l.keywords.slice(0,4).map((k,i)=>`<button class="pmq-choice" data-apply="${i}">${esc(k)}</button>`).join("")}
        </div>
        <button class="pmq-secondary" data-action="reveal-apply">Show me the model reasoning</button>
        <div id="apply-model" class="pmq-model hidden"><h3>Model approach</h3><p>${esc(l.model)}</p><h3>🔑 Keywords</h3><div class="pmq-keywords">${l.keywords.map(k=>`<span>${esc(k)}</span>`).join("")}</div></div>
        <button class="pmq-primary hidden" id="apply-next" data-action="next">Now retrieve it →</button>
      </div>`;
    } else if(step===5){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">6 · RETRIEVE</span>
        <h2>Now it disappears</h2>
        <p>Complete this without looking back.</p>
        <div class="pmq-gap-card"><p>${esc(l.gap)}</p><input id="retrieval-input" class="pmq-input" placeholder="Your answer…" autocomplete="off"></div>
        <button class="pmq-primary" data-action="check-retrieval">Check my recall</button>
        <div id="retrieval-result" class="pmq-result"></div>
      </div>`;
    } else if(step===6){
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">7 · EXPLAIN</span>
        <h2>Teach it back: ${esc(l.topic)}</h2>
        <p>Use this structure:</p>
        <ol class="pmq-structure"><li><b>What it is</b></li><li><b>When/where it matters</b></li><li><b>Why it matters</b></li></ol>
        <textarea id="explain-input" class="pmq-textarea" placeholder="Explain it in your own words…"></textarea>
        <button class="pmq-secondary" data-action="reveal-explain">Reveal model answer</button>
        <div id="explain-model" class="pmq-model hidden"><p>${esc(l.model)}</p><h3>🔑 What I wanted to hear</h3><div class="pmq-keywords">${l.keywords.map(k=>`<span>${esc(k)}</span>`).join("")}</div></div>
        <div id="self-rate" class="hidden pmq-rate"><p>How does it feel?</p><button data-rate="got">🟢 Got it</button><button data-rate="again">🟠 Need another go</button></div>
      </div>`;
    } else {
      body=`<div class="pmq-lesson">
        <span class="pmq-kicker">8 · EXAM BRIDGE</span>
        <h2>Now try the PMQ version</h2>
        <div class="pmq-scenario"><b>Exam-style prompt</b><p>${esc(l.exam)}</p></div>
        <textarea id="exam-input" class="pmq-textarea" placeholder="Write your answer…"></textarea>
        <button class="pmq-secondary" data-action="reveal-exam">Reveal model answer</button>
        <div id="exam-model" class="pmq-model hidden"><p>${esc(l.model)}</p><h3>🔑 Marking keywords</h3><div class="pmq-keywords">${l.keywords.map(k=>`<span>${esc(k)}</span>`).join("")}</div></div>
        <button class="pmq-primary" data-action="finish">Finish this 5–10 minute lesson</button>
      </div>`;
    }
    render(`<div class="pmq-learn-shell">${header()}${body}<div class="pmq-steps">${["Meet","Connect","Recognise","Build","Apply","Retrieve","Explain","Exam"].map((x,i)=>`<span class="${i<=step?'on':''}">${i+1}</span>`).join("")}</div></div>`);
  }

  function revealModel(id,nextId){
    document.getElementById(id)?.classList.remove("hidden");
    document.getElementById(nextId)?.classList.remove("hidden");
  }

  function finish(rating){
    state.done[current.id]=Date.now();
    if(rating==="again") state.weak[current.id]=(state.weak[current.id]||0)+1;
    else if(state.weak[current.id]) delete state.weak[current.id];
    save();
    render(`<div class="pmq-learn-shell"><div class="pmq-complete">
      <span class="pmq-kicker">LESSON COMPLETE</span><h2>${rating==="again"?"🟠 Good — now you know what to revisit.":"🎉 Nice work."}</h2>
      <p>${rating==="again"?"You weren't expected to know it instantly. The important thing is that you've identified the weak point.":"You have now met, recognised, applied, retrieved and explained the concept."}</p>
      <div class="pmq-complete-actions"><button class="pmq-primary" data-action="quick">Next 5-minute lesson</button><button class="pmq-secondary" data-action="menu">Back to learning menu</button></div>
    </div></div>`);
  }

  document.addEventListener("click",e=>{
    const a=e.target.closest("[data-action]");
    if(a){
      const act=a.dataset.action;
      if(act==="menu") return menu();
      if(act==="quick") return chooseQuick();
      if(act==="continue") return continueLearning();
      if(act==="weak") return weak();
      if(act==="life"){ return render(`<div class="pmq-learn-shell"><div class="pmq-hero"><span class="pmq-kicker">MY LIFE → PMQ</span><h2>🧠 Make it make sense</h2><p>Pick an anchor. We'll use it to build a memory hook for PMQ concepts.</p></div><div class="pmq-life-grid">${Object.entries(lifeMap).map(([k,v])=>`<button class="pmq-card" data-life="${k}"><b>${v.name}</b><span>${v.desc}</span></button>`).join("")}</div><button class="pmq-secondary" data-action="menu">← Back</button></div>`); }
      if(act==="next"){step=Math.min(8,step+1);return showStep();}
      if(act==="check-gap"||act==="check-retrieval"){
        const id=act==="check-gap"?"gap-input":"retrieval-input", out=act==="check-gap"?"gap-result":"retrieval-result";
        const v=(document.getElementById(id)?.value||"").trim().toLowerCase();
        const ok=current.gapAnswers.some(x=>v===x.toLowerCase()||v.includes(x.toLowerCase()));
        document.getElementById(out).innerHTML=ok?`<b>✅ Correct.</b> ${esc(current.gapAnswers.join(" / "))}`:`<b>🟠 Not quite yet.</b> The answer is <strong>${esc(current.gapAnswers[0])}</strong>. Read it once, then keep going.`;
        if(act==="check-gap") setTimeout(()=>{step=4;showStep();},700);
        else setTimeout(()=>{step=6;showStep();},700);
      }
      if(act==="reveal-apply"){revealModel("apply-model","apply-next");}
      if(act==="reveal-explain"){revealModel("explain-model","self-rate");}
      if(act==="reveal-exam"){document.getElementById("exam-model")?.classList.remove("hidden");}
      if(act==="finish"){return finish("got");}
    }
    const topic=e.target.closest("[data-lesson]");
    if(topic) start(topic.dataset.lesson);
    const word=e.target.closest("[data-word]");
    if(word){const input=document.getElementById("gap-input");if(input) input.value=word.dataset.word;}
    const rec=e.target.closest("[data-rec]");
    if(rec){
      const r=current.recognise[Number(rec.dataset.rec)];
      rec.classList.add(r[2]?"correct":"wrong");
      rec.querySelector("b").textContent=r[1];
      document.getElementById("rec-result").innerHTML=`<b>${r[2]?"Nice — you spotted it.":"Keep going — this is practice."}</b>`;
      if([...document.querySelectorAll("[data-rec]")].every(x=>x.classList.contains("correct")||x.classList.contains("wrong"))){
        document.getElementById("rec-next").classList.remove("hidden");
      }
    }
    const rate=e.target.closest("[data-rate]");
    if(rate) finish(rate.dataset.rate);
  });

  // Optional entry point for an existing page.
  window.PMQLearningSystem={menu,start,lessons};
})();
