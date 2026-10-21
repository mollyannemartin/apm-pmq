const PMQ_TOPICS = [
  {
    "id": "life-cycles",
    "area": "Setting up for success",
    "title": "1. Life cycles",
    "summary": "Topic 1 — Life cycles. Learn what a life cycle is, the linear/iterative/hybrid approaches, the phases of a linear life cycle, strengths and limitations, extended/product life cycles, and how context, culture, project needs and complexity influence the choice.",
    "know": [
      "A project life cycle is the framework of phases used to organise a project from its beginning through delivery. Different life cycles provide different ways to manage uncertainty and work.",
      "Linear life cycle: a structured, largely sequential approach. It suits work where scope and requirements can be understood early and the output can be delivered in a single pass.",
      "Linear phases in the course material: Concept → Definition → Deployment → Transition. Concept explores the opportunity and business case; Definition develops requirements and the Project Management Plan (PMP); Deployment creates/tests/procures/builds the output; Transition accepts and hands the output over for use.",
      "Concept output: Business Case. Definition output: Project Management Plan (PMP). Deployment output: product/output. Transition includes acceptance, handover, closing contracts/resources, archiving information and preparing for benefits realisation.",
      "Linear strengths: structured and predictable; supports rolling-wave planning, more accurate estimates, risk planning for later phases, lessons learned between phases, funding in chunks, go/no-go decision points and stakeholder commitment.",
      "Linear limitations: requires more definition up front; changes can be expensive or slow to process; scope is harder to adapt once agreed; benefits may arrive later; early versions may not be usable/released.",
      "Iterative life cycle: repeats one or more phases so the solution can evolve as learning and discovery reduce uncertainty. It is useful where scope is unclear, requirements evolve, the market is uncertain or feedback is valuable.",
      "Iterative features in the course material: time and cost may be fixed while scope/quality flex; early prototypes or increments can be released; teams may self-organise; regular feedback informs refinement. A timebox has a defined duration, even if all planned work is not completed.",
      "Hybrid life cycle: combines linear and iterative approaches, for example fixed governance/funding/release milestones with iterative development inside them.",
      "Extended project life cycle includes adoption and benefits realisation beyond producing the output. The product life cycle can continue through operations and termination; operations support/maintain/upgrade the product, and termination closes down its use and disposes of it safely.",
      "Life-cycle choice depends on three headings from the slides: Context, Culture and Project needs. Also consider uncertainty, complexity, technology, predictability, ability to release early, stakeholder/customer openness to change, team capability and supplier/organisational culture.",
      "A life cycle breaks the work into distinct phases and gives a structure for planning, governance and control. The phases and names can vary by sector and life-cycle approach.",
      "End-of-phase reviews and gate reviews are related but not identical: a stage review evaluates progress/processes and identifies corrective action; a gate review is a senior go/no-go decision about whether to proceed into the next phase.",
      "Rolling-wave planning means planning the whole project at a high level, planning the next phase in detail, then refining later plans as uncertainty reduces.",
      "A linear life cycle often treats scope/requirements as relatively fixed while time and cost are estimated around them. In an iterative approach, time and cost may be timeboxed while the detailed scope is prioritised and allowed to flex.",
      "Evolutionary development delivers a solution through successive major versions or transitions, with learning from one informing the next. Incremental development adds usable pieces of functionality; iterative development refines the solution through repeated cycles. They can be combined.",
      "Reviews can include stage/project evaluation reviews, gate reviews, audits, peer reviews, post-project reviews and benefits-realisation reviews. They serve different purposes and may happen at different points."
    ],
    "apply": [
      "Choose linear when scope is understood, requirements are stable, the work is predictable, and a single-pass delivery or fixed sequence is needed.",
      "Choose iterative when scope or solution is uncertain, users can give feedback, early versions are valuable, and the team can learn and adapt through timeboxes.",
      "Choose hybrid when some elements need fixed structure and control while others need experimentation or feedback.",
      "Explain your choice by linking the clues in the scenario to the approach. Do not just name the life cycle: say why it fits.",
      "Use phase reviews/decision gates to decide whether to continue, change direction or stop before committing further resources.",
      "When asked why projects are divided into phases, link your answer to control, more accurate planning/estimates, risk management, staged funding, review points and the ability to stop or redirect before committing more resources.",
      "For a review question, identify the timing and decision: regular progress/process check (stage/evaluation review), end-of-phase go/no-go (gate review), independent assurance (audit), learning after delivery (post-project review), or checking whether value was achieved after use (benefits-realisation review)."
    ],
    "distinctions": [
      "Linear vs iterative: planned, sequential phases and relatively stable scope vs repeated cycles, feedback and evolving understanding.",
      "Iterative vs incremental: iterative improves/refines the solution through cycles; incremental delivers usable parts or added functionality in stages. A project may be both.",
      "Hybrid vs a single approach: hybrid deliberately combines approaches for different parts or stages of the same project.",
      "Project life cycle vs extended life cycle: delivery phases vs also including adoption and benefits realisation after delivery.",
      "Output vs outcome/benefit: the product/service delivered vs the change from using it vs the measurable improvement/value that results.",
      "Stage review vs gate review: evaluate performance and agree actions vs make a formal decision whether to proceed.",
      "Project evaluation review vs audit: a review evaluates progress/processes; an audit provides a more independent, objective assessment of project management/compliance.",
      "Post-project review vs benefits-realisation review: learn whether the project was delivered well and what to improve vs assess later whether intended benefits have actually occurred.",
      "Timebox vs task list: a timebox has a fixed duration; the team prioritises the most valuable work achievable within it rather than assuming every item must be completed."
    ],
    "scenario": "A project has unclear user requirements, a volatile market and customers who are willing to review prototypes. Which life cycle is the best fit? Explain the clues and one limitation to manage.",
    "applyScenarios": [
      {
        "model": "Linear",
        "scenario": "A new office building has a stable specification, statutory requirements are known, and construction activities must follow a defined sequence before handover.",
        "answer": "A linear life cycle is a strong fit because the requirements and sequence are relatively stable and the work can be planned through defined phases. The project can progress through those phases in a structured order, with reviews before major commitments."
      },
      {
        "model": "Incremental",
        "scenario": "An organisation needs a new digital service but cannot wait two years for the complete solution. A basic version could deliver useful functionality first, followed by additional releases that add capability.",
        "answer": "An incremental life cycle is suitable because the target state can be reached through a series of smaller deliveries. Each increment adds functionality or value, allowing earlier benefits while the full solution is developed."
      },
      {
        "model": "Iterative",
        "scenario": "Users are unsure exactly what they need from a new internal application. The team can develop prototypes, obtain user feedback and repeatedly refine the solution.",
        "answer": "An iterative life cycle is suitable because uncertainty is high and learning from feedback is important. The team repeats development and refinement cycles, using what it learns to improve the solution."
      },
      {
        "model": "Evolutionary",
        "scenario": "A company is entering a new market where customer expectations are uncertain. It plans several major versions of its product, with each version shaped by feedback and learning from the previous one.",
        "answer": "An evolutionary life cycle is suitable because deployment happens through major transitions, with each transition informed by feedback from the preceding one. This allows the solution to evolve as understanding of the market improves."
      },
      {
        "model": "Hybrid",
        "scenario": "A major website transformation has fixed governance, funding and release milestones, but the user-facing software needs agile development and frequent feedback within those boundaries.",
        "answer": "A hybrid life cycle is suitable because different parts of the project have different needs. Predictive or linear elements can provide governance and major milestones, while iterative methods can be used for the uncertain software development work."
      },
      {
        "model": "Extended",
        "scenario": "A new HR system has been delivered, but the project team remains accountable for training, adoption, operational handover and measuring whether the expected efficiency benefits are actually realised.",
        "answer": "An extended life cycle is appropriate because the work does not stop at technical delivery. It adds adoption and benefits-realisation activity so that the outputs become embedded in operations and the intended benefits can be measured."
      }
    ],
    "applyAnswer": "An iterative life cycle is likely to fit because requirements and the market are uncertain, and customer feedback can be used to refine the solution. Timeboxes and early prototypes can support learning. The team still needs to manage the risk that scope expands or that the planned work may not all fit within a timebox.",
    "studyNotes": [
      {
        "heading": "Linear life cycle — phases and outputs",
        "body": "Concept: understand the problem/opportunity, investigate feasibility, identify stakeholders and preferred solution, prepare the Business Case, and obtain approval to proceed. Definition: develop requirements, plan the project, produce the PMP, and obtain approval/funding. Deployment: further define requirements as needed, build/test/procure/manufacture/configure and check readiness. Transition: commission and accept the output, hand it to the sponsor/users/operations, release resources, close contracts, archive documentation and prepare for post-project review and benefits realisation."
      },
      {
        "heading": "Why use a linear life cycle?",
        "body": "It can make planning and estimating easier, support risk management by looking ahead to later phases, allow lessons from one phase to improve the next, release funding in chunks, create go/no-go decision points and help secure stakeholder commitment. It works best when enough is known up front."
      },
      {
        "heading": "Iterative, hybrid and timeboxes",
        "body": "Iterative work repeats development to learn and refine. Early versions/prototypes can be tested by users. A timebox fixes the period available; the team prioritises what can be achieved, rather than assuming every planned activity will fit. Hybrid combines approaches, such as a linear business case and governance structure with iterative product development."
      },
      {
        "heading": "Lifecycle selection — the three headings",
        "body": "Context: external conditions, regulation, supplier/customer environment and uncertainty. Culture: how the organisation and suppliers make decisions, respond to change and empower teams. Project needs: clarity of scope, complexity, technology, need for early benefits/releases, feedback and predictability. The best choice follows the situation, not a favourite method."
      },
      {
        "heading": "Extended and product life cycles",
        "body": "The extended life cycle recognises that delivery alone is not enough: transition, adoption and benefits realisation matter. The product life cycle can continue through operations (use, support, maintenance and upgrades) and termination (safe shutdown/disposal). Costs and benefits after delivery may need to be included in the business case."
      },
      {
        "heading": "Reviews — know the purpose, not just the name",
        "body": "Stage/project evaluation reviews happen regularly and check progress against time, cost, quality, scope and resources; evaluate processes; identify concerns/corrective actions; and capture lessons. Gate reviews usually occur at the end of a phase and support a senior go/no-go decision informed by the business case, current-phase completion, risks and the plan for the next phase. Audits give an objective assessment, often by someone outside the project team. Peer reviews use colleagues of comparable competence to improve quality and credibility. A post-project review asks what went well, what went badly and what could be improved. A benefits-realisation review happens after outputs are in use and checks whether expected benefits have been realised; the sponsor commonly has responsibility."
      },
      {
        "heading": "Why phases help — the exam answer",
        "body": "Phases create control points. They support rolling-wave planning, improve estimating accuracy as uncertainty reduces, allow risks and mitigations to be refined, release funding in stages, create go/no-go decisions, encourage stakeholder commitment, and let lessons from earlier phases improve later work. In an explain question, state the benefit and why it matters."
      },
      {
        "heading": "The life-cycle triangle: fixed and flexible",
        "body": "Your class notes contrast what is fixed and what can flex. In the linear example, scope is fixed while time/cost are managed against the defined scope; quality is still a requirement and must not be treated as permission to deliver something unacceptable. In iterative work, time and cost may be fixed for a timebox while scope is prioritised and can flex. Read the actual scenario carefully: do not assume every iterative project fixes exactly the same constraints."
      },
      {
        "heading": "Product life cycle vs project life cycle",
        "body": "The project life cycle covers work to create and transition the output. The extended project life cycle adds adoption and benefits realisation. The product life cycle can continue through operations (use, support, maintenance and upgrades) and then termination (shut down safely and dispose of the product). Output = what is delivered; outcome = the change created by using it; benefit = measurable value from that change."
      }
    ],
    "quickCheck": [
      {
        "q": "Scope is understood and can be planned in detail early. Which life cycle?",
        "a": "Linear — the Big Design Up Front clue points to stable requirements and planned phases."
      },
      {
        "q": "The team needs to explore higher-risk options and learn from user feedback. Which life cycle?",
        "a": "Iterative — repeated cycles let the team test, learn and refine."
      },
      {
        "q": "Time and cost are fixed but scope can flex, with early prototypes. Which approach does this suggest?",
        "a": "Iterative, often organised into timeboxes."
      },
      {
        "q": "Name the four linear phases in the course slides.",
        "a": "Concept → Definition → Deployment → Transition."
      },
      {
        "q": "What three headings influence life-cycle choice in the slides?",
        "a": "Context, Culture and Project needs."
      },
      {
        "q": "Does delivery automatically mean benefits have been realised?",
        "a": "No. Adoption and use must lead to the intended outcomes and measurable benefits."
      },
      {
        "q": "What is rolling-wave planning?",
        "a": "Plan the whole project at a high level, plan the next phase in detail, then refine future plans as more is known."
      },
      {
        "q": "Which review normally makes the end-of-phase go/no-go decision?",
        "a": "A gate review, informed by the business case, phase completion, risks and the plan for the next phase."
      },
      {
        "q": "What is the difference between a post-project review and a benefits-realisation review?",
        "a": "The post-project review looks at how the project was delivered and lessons learned; the benefits review checks after the output is in use whether intended benefits have occurred."
      },
      {
        "q": "Name three benefits of structuring a project into phases.",
        "a": "Examples: improved estimates, better risk management, staged funding, control/gate decisions, lessons between phases, and stakeholder commitment."
      },
      {
        "q": "What are the three life-cycle choice headings from the class slides?",
        "a": "Context, Culture and Project needs."
      }
    ]
  },
  {
    "id": "governance",
    "area": "Setting up for success",
    "title": "2. Governance arrangements",
    "summary": "Topic 2 — Governance arrangements. Learn how projects fit into organisational structures, what governance does, how decision rights and escalation work, and the responsibilities of the sponsor, project manager, steering group/board, product owner, team and users.",
    "know": [
      "Governance is the framework of authority and accountability that directs and controls project work and helps ensure outputs, outcomes and benefits align with organisational objectives.",
      "Organisational governance sets standards and expectations for how projects are identified, approved, managed and controlled. It may require a business case, recognised life cycle, agreed method, risk/issue/change processes, a PMP, reviews/audits, decision gates, clear roles and escalation routes.",
      "Functional structure: people are grouped by specialist function; functional managers retain significant authority and project resources may be shared across work.",
      "Matrix structure: authority is shared between functional managers and project managers. It can improve cross-functional coordination, but dual reporting and competing priorities can create tension.",
      "Projectised structure: project manager has stronger authority and a dedicated team focused on the project; resources may move when the project ends.",
      "Permanent organisation structures support ongoing functions; temporary project structures bring people together for a defined change and period.",
      "Project sponsor: accountable for effective governance and achieving the objectives/needs; communicates vision and high-level expectations; secures funding; owns/develops the business case with the PM; provides senior support; makes or secures business decisions and may manage the transition to the project manager.",
      "Project manager: manages day-to-day delivery, plans and coordinates work, manages risks/issues/resources/schedule/cost/quality and communications, reports progress, and escalates matters outside delegated authority.",
      "Steering group/board: provides direction and oversight, reviews progress and continued viability, resolves escalated issues and makes decisions within its authority.",
      "Project team members: deliver assigned work, provide specialist input, communicate progress and risks, collaborate and take responsibility for their outputs.",
      "Product owner: represents product/user value, helps prioritise requirements and provides direction on what should deliver the greatest value (especially in iterative approaches).",
      "Users: contribute requirements and feedback, help test whether the solution meets needs, support acceptance and ultimately use the outputs.",
      "Governance should be clear and proportionate: decision rights, responsibilities, tolerances, reporting and escalation routes should be understood rather than assumed.",
      "Projects vs business as usual (BAU): projects are temporary, introduce change, are unique, introduce risk and often draw cross-functional skills; BAU uses permanent structures, adopts the change and carries out repeatable routine processes. Project teams normally disband when the project ends.",
      "The organisational continuum runs from functional (functional manager has most authority), through matrix (authority shared between functional and project managers), to projectised (project manager has strong or near-complete authority). Actual authority varies by organisation and project.",
      "Functional structure: a head of a functional area may take overall responsibility; specialists are drawn from that function and the project may be funded from its operating budget. Strength: access to specialist skills. Weakness: project work may be lower priority than BAU.",
      "Matrix structure: the PM takes overall responsibility for project delivery, but team members may report to both the PM and their functional line manager. Strength: cross-functional coordination and organisational visibility. Weakness: conflicting priorities and dual reporting. Resources are usually assigned temporarily to projects.",
      "Projectised structure: a dedicated team reports to the PM and focuses on project work. Strength: focus and faster coordination. Weaknesses can include isolation from other projects, duplicated support functions, uncertainty about staff roles after completion and loss of knowledge when the team disperses.",
      "Governance includes policies (the organisation's rules/standards), regulations (legal or external requirements such as health and safety or data protection), functions, processes/procedures (the agreed steps and templates for areas such as risk, change and procurement), and delegated responsibilities (who may decide/do what, often clarified with RACI/RAM).",
      "Governance provides stakeholder confidence, supports efficient/effective decisions, empowers people to act within delegated authority, establishes escalation routes and ensures legal, regulatory, corporate, ethical and professional compliance.",
      "Life-cycle choice changes the shape and frequency of governance. Linear projects often use more detailed documentation and formal stage-gates/re-approval. Iterative projects may be less document-heavy but still need agreed governance; control points may occur at the end of increments and change/prioritisation decisions may happen more frequently.",
      "Financial authority is not unlimited. The PM may manage spending within agreed tolerances; if a forecast exceeds the tolerance or approved funding, the PM must escalate to the sponsor or other authorised decision-maker. The agreed route and limits govern who can approve the response.",
      "Projects must link to organisational objectives because outputs are intended to enable beneficial change. The business case should demonstrate that link and justify the investment. If the project no longer supports objectives or the business case is no longer valid, it may need to be changed, paused or closed."
    ],
    "apply": [
      "Check the agreed governance arrangements and delegated authority before making a significant decision.",
      "If a forecast exceeds the PM’s agreed tolerance or authority, assess the impact and escalate through the agreed route; do not quietly absorb or conceal the variance.",
      "Choose an organisational structure by considering project manager authority, resource availability, specialist control, coordination needs and whether people report to more than one manager.",
      "Use the sponsor for senior ownership, business justification, funding and decisions; use the PM for day-to-day planning and delivery; use the board/steering group for oversight and decisions assigned to it.",
      "Governance is not just paperwork: it connects the project to organisational objectives and makes accountability and decisions explicit.",
      "When comparing structures, explicitly state who has authority, how resources are assigned/reported, one strength and one weakness. For matrix, mention dual reporting/competing priorities; for functional, competing BAU priorities; for projectised, dedicated focus but potential loss of team/knowledge at closure.",
      "When explaining why governance is required, connect each point to its purpose: confidence, better decisions, empowerment within limits, escalation and compliance. Avoid just listing documents.",
      "For a life-cycle/governance scenario, compare formal stage-gates and detailed plans in a linear approach with increment-end control points and more frequent reprioritisation in an iterative approach. Iterative does not mean 'no governance'.",
      "For organisational alignment, ask: which organisational objective does this project support, what beneficial change will the outputs enable, and does the business case still justify the investment? If no clear link remains, recommend review and possible closure rather than continuing by default."
    ],
    "distinctions": [
      "Governance vs management: governance sets direction, authority, oversight and accountability; management plans and controls the work within that framework.",
      "Sponsor vs project manager: sponsor owns senior business justification/direction and governance; PM manages day-to-day delivery.",
      "Functional vs matrix vs projectised: authority mainly with functional managers vs shared authority vs stronger dedicated project authority.",
      "Project board/steering group vs project team: oversight and decisions vs carrying out the work.",
      "Product owner vs project manager: prioritises product value/requirements vs coordinates delivery and project constraints.",
      "Delegated authority/tolerance vs unlimited authority: the PM can decide within agreed boundaries; exceptions must be escalated to the authorised decision-maker.",
      "Projects vs BAU: temporary, unique change/risk/cross-functional work vs permanent, repeatable operations that adopt and sustain the change.",
      "Functional vs matrix vs projectised: functional authority sits mainly with the line manager; matrix authority is shared; projectised authority and team focus sit mainly with the PM.",
      "Policy vs regulation vs process/procedure: organisational rule/standard vs legal or external requirement vs the steps used to carry out work consistently.",
      "Delegated authority vs escalation: decisions within agreed limits can be made at the delegated level; decisions beyond the limit must go to the authorised higher level.",
      "Governance vs paperwork: paperwork may evidence controls, but governance is the framework of authority, accountability, decisions, compliance and value control.",
      "Project output vs organisational objective: the output is what the project delivers; the objective is the wider organisational aim the output should help achieve."
    ],
    "scenario": "A project manager forecasts that the project will exceed an agreed cost tolerance. The team suggests keeping it quiet until the next monthly report. What should the PM do, and why?",
    "applyAnswer": "The PM should assess and report the forecast promptly through the agreed governance and escalation route. The tolerance defines the PM’s delegated authority, so an expected breach requires the appropriate sponsor/board or other authorised decision-maker to consider the response. Hiding it would undermine governance, accountability and timely decision-making.",
    "extraScenarios": [
      {
        "label": "Organisational structure",
        "scenario": "A specialist department controls staff allocation and people report to both their functional manager and project manager. Which structure is this likely to be?",
        "answer": "A matrix structure. Authority is shared, which supports cross-functional work but can create competing priorities or dual-reporting tension."
      },
      {
        "label": "Sponsor or PM?",
        "scenario": "The project needs senior funding approval and ownership of the business case. Who is primarily accountable?",
        "answer": "The project sponsor is primarily accountable for senior ownership, funding and the business justification, working with the project manager as appropriate."
      },
      {
        "label": "Board or team?",
        "scenario": "A project decision exceeds the PM’s delegated authority and could change the business case. Who should decide?",
        "answer": "Escalate through the governance arrangements to the sponsor, board or other authorised decision-maker identified for that decision. The delivery team should not make a decision beyond its authority."
      },
      {
        "label": "Product owner",
        "scenario": "In an iterative digital project, two features compete for the next release. Who helps prioritise based on user value?",
        "answer": "The product owner typically represents user/product value and helps prioritise requirements. The PM still coordinates delivery constraints and the overall project."
      },
      {
        "label": "Functional, matrix or projectised?",
        "scenario": "A project team is made up of specialists loaned from departments. Each person must meet the priorities set by both their line manager and the project manager.",
        "answer": "Matrix. Authority is shared and team members may have dual reporting, which helps combine specialist skills but can cause competing priorities."
      },
      {
        "label": "Governance and life cycle",
        "scenario": "A project delivers in formal phases, and senior leaders must review the business case and approve continuation before the next phase begins. Which governance mechanism is this?",
        "answer": "A gate review or stage-gate. It is a formal control point for a go/no-go decision based on progress, risk, the business case and the next-phase plan."
      },
      {
        "label": "Limits of financial authority",
        "scenario": "The PM's forecast shows spending will exceed the agreed tolerance. A team member suggests moving costs into another work package so the project stays within the report. What should happen?",
        "answer": "The PM should report the forecast honestly, assess the impact and escalate through the agreed governance route to the sponsor or authorised decision-maker. Hiding or misclassifying costs undermines accountability and compliance."
      },
      {
        "label": "Strategic alignment",
        "scenario": "A project was approved to support an organisational objective, but that objective has been removed and no other clear benefit justifies the project. What should the sponsor/board do?",
        "answer": "Review the business case and continued justification. If the project no longer supports organisational objectives and no valid justification remains, the authorised decision-makers should consider stopping or closing it."
      }
    ],
    "studyNotes": [
      {
        "heading": "What governance does",
        "body": "Governance defines authority and accountability and controls how the project is directed. It connects the project to organisational objectives and creates the agreed way to approve work, review progress, make decisions, manage risk/issues/change and escalate matters. Typical controls include a business case, life-cycle/methodology, project management plan, decision gates, reviews/audits, defined roles and reporting routes."
      },
      {
        "heading": "Functional, matrix and projectised structures",
        "body": "Functional: specialists sit in departments and functional managers control resources; project managers may have limited authority. Matrix: staff work across functions and projects, with authority shared between functional and project managers; coordination can improve, but competing priorities and dual reporting may occur. Projectised: a dedicated project team and stronger project manager authority can focus delivery, but resources may need reassignment when the project finishes."
      },
      {
        "heading": "Who does what?",
        "body": "Sponsor: senior accountability, vision, business case, funding, support and business-level decisions. Project manager: plans and manages day-to-day delivery, coordinates the team and controls performance. Steering group/board: oversight, direction, reviews and decisions within its remit. Team: performs and reports the work. Product owner: prioritises product requirements/value. Users: explain needs, provide feedback, help test and accept/use the output. Exact role boundaries depend on the project’s agreed governance."
      },
      {
        "heading": "Authority, tolerances and escalation",
        "body": "A tolerance is an agreed boundary within which the PM can manage. If a forecast indicates the boundary will be exceeded, the PM should assess the impact and escalate to the correct authority. Escalation is not failure; it ensures decisions are made at the right level and the business case and project remain under control."
      },
      {
        "heading": "Projects vs BAU — fast comparison",
        "body": "Projects are temporary, unique, introduce change and risk, use cross-functional skills, and have a team that is disbanded when the work is complete. BAU is the permanent organisation: departments and teams perform repeatable operations, manage known risks and adopt/support the change delivered by the project. A PMQ answer should use the contrast rather than simply saying 'projects are temporary'."
      },
      {
        "heading": "The organisational structure continuum",
        "body": "Functional → Matrix → Projectised. In a functional structure, the functional/line manager has most authority and project work competes with BAU. In a matrix structure, authority is shared between the line manager and PM; people may report to both, so priorities need active management. In a projectised structure, the PM has stronger authority and a dedicated team focused on the project, but the team may need new roles when the project ends and learning can be lost if not captured."
      },
      {
        "heading": "Roles — sponsor vs PM vs board",
        "body": "Sponsor: sets high-level expectations and vision, secures funding, owns/develops the business case with PM support, supports governance, makes business decisions at gates and ensures benefits are realised. PM: day-to-day delivery, budget/schedule/risk/issue control, stakeholder updates, team leadership, owns/updates the PMP, allocates work and escalates issues. Steering group/board: usually chaired by sponsor; provides strategic direction, considers feasibility/business case/outcomes, authorises funding/continuation and decides escalated issues. Exact accountabilities depend on the agreed governance model."
      },
      {
        "heading": "The other roles",
        "body": "Product owner: especially common in iterative/hybrid approaches; understands stakeholder needs, defines/prioritises product scope and goals, connects stakeholders with the team, and accepts completed increments. Users: define needs and acceptance criteria, contribute expertise, identify constraints/dependencies, test, accept/use outputs and help realise benefits. Team members: carry out specialist tasks, deliver outputs, report progress, identify/report risks and changes, and may manage sections of the work breakdown structure (WBS)."
      },
      {
        "heading": "Governance controls — what each one does",
        "body": "Policies set organisational standards. Regulations impose legal/external requirements. Functions and processes/procedures define how areas such as risk, change, quality and procurement are managed, often using agreed steps and templates. Delegated responsibilities make decision rights clear; RACI/RAM tools can clarify who is responsible, accountable, consulted and informed. Together these controls improve confidence, decisions, empowerment, escalation and compliance."
      },
      {
        "heading": "Life cycle, governance and money",
        "body": "Linear delivery commonly uses formal phase boundaries, detailed plans/documentation and gate reviews where continuation is re-approved. Iterative delivery may use lighter documentation and control points at the end of increments, with reprioritisation/change decisions occurring more often. Both still need agreed decision rights, risk/change control, records and escalation. A PM can spend/decide only within agreed limits: forecast tolerance breaches should be escalated, not hidden."
      },
      {
        "heading": "Link every project to strategy",
        "body": "The project should create outputs that enable beneficial organisational change. Its business case must explain how that change supports organisational objectives and why the investment remains worthwhile. If strategic priorities change or the expected benefits no longer justify the cost/risk, the sponsor/board should reassess the business case and may stop the project."
      },
      {
        "heading": "Organisation structures — compare authority and resources",
        "body": "Functional: people sit in permanent specialist functions and take direction from functional managers; useful when a project sits within one function, but cross-functional coordination and project priority can be harder. Matrix: authority is shared between the functional manager and project manager; skilled people can be assigned temporarily, but dual reporting and competing priorities need active management. Projectised: a dedicated project team reports to its project manager and focuses on project work; focus is strong, but teams may become insular and need to share learning across projects."
      },
      {
        "heading": "What organisational governance requires",
        "body": "The organisation sets standards and good practice for projects. The class slides list requirements such as a relevant business case, a recognised life cycle with control points (gate reviews, audits and evaluation reviews), an agreed project-management method, clear risk and issue processes, a structured project management plan, defined processes/roles/responsibilities, and routes for reporting issues and escalating risk. The exact framework should fit organisational practice."
      },
      {
        "heading": "Sponsor, project manager and steering board",
        "body": "Sponsor: accountable for effective governance and meeting identified needs; communicates the vision, sets high-level expectations, secures funding, owns/develops the business case with PM support, coordinates business change and makes business decisions at phase reviews. Project manager: runs day-to-day delivery, manages outputs/risks/budget/schedule, communicates with stakeholders, leads the team, owns and controls the PMP and allocates work packages. Steering group/board: chaired by the sponsor in the slides; guides the project against strategic aims, authorises the business case/funding, considers feasibility and outcomes, decides escalated issues and represents business, user and supplier interests."
      },
      {
        "heading": "Product owner, team members and users",
        "body": "Product owner (especially iterative/hybrid): defines product scope and focus, bridges stakeholders and team, understands user needs, defines the output vision/goals and accepts completed increments. Team members carry out tasks, deliver outputs, report progress, help identify/report risks and changes, and manage parts of the work breakdown structure. Users help define and prioritise requirements (including musts vs wants), identify constraints/dependencies, define acceptance criteria, test and accept outputs, then operate/support them and use them to realise benefits."
      },
      {
        "heading": "Delegated authority and alignment",
        "body": "Governance clarifies who can decide what, within which financial limits, and when a matter must be escalated. The project should remain linked to organisational objectives: the business case should explain how the change and its outputs support intended outcomes and benefits. A project that no longer aligns may need corrective action, re-justification or closure."
      }
    ],
    "quickCheck": [
      {
        "q": "What is governance in project management?",
        "a": "The framework of authority and accountability that directs and controls project work."
      },
      {
        "q": "Which structure has shared authority and can involve dual reporting?",
        "a": "Matrix."
      },
      {
        "q": "Who is primarily accountable for senior business ownership, funding and the business case?",
        "a": "The project sponsor, working with the project manager as needed."
      },
      {
        "q": "What should the PM do if a forecast exceeds delegated tolerance?",
        "a": "Assess and escalate through the agreed governance route to the authorised decision-maker."
      },
      {
        "q": "Governance or management: which sets oversight and decision rights?",
        "a": "Governance. Management coordinates and controls the delivery work within that framework."
      },
      {
        "q": "Who usually prioritises requirements based on product/user value in an iterative project?",
        "a": "The product owner."
      },
      {
        "q": "List five differences between projects and BAU.",
        "a": "Projects are temporary, introduce change, are unique, introduce risk and are often cross-functional; BAU is permanent, adopts change, repeats processes, manages known risks and uses dedicated operational resources."
      },
      {
        "q": "Put the structures in order from least PM authority to most PM authority.",
        "a": "Functional → Matrix → Projectised."
      },
      {
        "q": "Give one strength and one weakness of a matrix structure.",
        "a": "Strength: brings cross-functional skills together and can improve project visibility. Weakness: dual reporting can create conflicting priorities."
      },
      {
        "q": "Name five reasons governance is required.",
        "a": "Stakeholder confidence, efficient/effective decisions, empowerment within delegated limits, clear escalation routes, and compliance with legal/regulatory/corporate/ethical/professional standards."
      },
      {
        "q": "What is the difference between a policy and a regulation?",
        "a": "A policy is an organisational standard or rule; a regulation is a legal or external requirement the project must comply with."
      },
      {
        "q": "How can the life cycle affect governance?",
        "a": "Linear projects commonly use formal stage-gates and detailed documentation; iterative projects may use lighter documentation and control points at the end of increments, with more frequent change/prioritisation decisions. Both still require governance."
      },
      {
        "q": "What should happen if the PM's forecast exceeds their financial tolerance?",
        "a": "Assess and report the forecast, then escalate through the agreed route to the sponsor or authorised decision-maker."
      },
      {
        "q": "Why must a project link to organisational objectives?",
        "a": "The project uses investment to deliver outputs that enable beneficial change. The business case must justify that link; if it no longer does, the project should be reviewed and may need to close."
      },
      {
        "q": "Who usually owns the business case and who manages day-to-day delivery?",
        "a": "The sponsor owns/develops the business case with PM support; the project manager manages day-to-day delivery and updates relevant plans/business-case information as required."
      },
      {
        "q": "Which structure usually has dual reporting to a functional manager and a project manager?",
        "a": "Matrix — authority is shared, so competing priorities and reporting lines must be managed."
      },
      {
        "q": "Who is accountable for governance and owns the business case?",
        "a": "The project sponsor (with support from the project manager during definition)."
      },
      {
        "q": "Who manages day-to-day delivery and controls the project management plan?",
        "a": "The project manager."
      },
      {
        "q": "What is the steering group/board for?",
        "a": "Strategic oversight, authorising business-case/funding decisions, deciding escalated issues and representing business, user and supplier interests."
      },
      {
        "q": "Why must a project link to organisational objectives?",
        "a": "To show the change remains justified and that outputs can contribute to the intended outcomes and benefits."
      }
    ]
  },
  {
    "id": "sustainability",
    "area": "Setting up for success",
    "title": "3. Sustainability",
    "summary": "Understand how environmental, social and economic considerations can affect project decisions, delivery and long-term value.",
    "know": [
      "Sustainability considers environmental, social and economic impacts rather than focusing only on immediate delivery.",
      "Consider whole-life impacts, resource use, waste, carbon, social value, accessibility and long-term operating consequences where relevant.",
      "Sustainability can affect requirements, procurement, design, risk, cost and benefits.",
      "Sustainable choices should be linked to the project's objectives and business case rather than treated as an isolated add-on."
    ],
    "apply": [
      "Identify sustainability requirements and measures early.",
      "Consider whole-life cost and impact rather than only the purchase or build cost.",
      "Engage stakeholders who understand environmental, social or operational consequences."
    ],
    "distinctions": [
      "Short-term cost vs whole-life value: a cheaper initial option may create greater operating or environmental costs later.",
      "Compliance vs sustainability: legal compliance is a minimum requirement; sustainability can drive additional positive outcomes."
    ],
    "scenario": "Two solutions meet the functional requirement, but one has lower whole-life energy use and slightly higher purchase cost. What should the project team consider?",
    "applyAnswer": "The team should compare the options using whole-life value, not purchase price alone. The lower-energy option may have higher upfront cost but lower operating impact and may support environmental, social or economic objectives. The decision should consider the project's requirements, business case, risks, benefits and relevant stakeholder priorities.",
    "studyNotes": [
      {
        "heading": "Sustainability — what the class objective means",
        "body": "The slide objective defines sustainability as balancing environmental, social, economic and administrative considerations that affect a project. It is not just recycling or reducing environmental harm: consider how project decisions affect people, affordability/value and how the work is governed and administered."
      },
      {
        "heading": "Connect sustainability to the business case",
        "body": "The slides say sustainability involves both individual and organisational responsibility. The business case should include sustainability targets and align with relevant frameworks, standards and good practice, including the UN Sustainable Development Goals (SDGs) and environmental, social and governance (ESG) criteria."
      },
      {
        "heading": "Why sustainability matters to a project",
        "body": "Consider the project’s responsibilities, principles and priorities, and how they affect the chosen solution, requirements, procurement, design, risks, costs, benefits and delivery decisions. Sustainability should be considered early and throughout the life cycle, rather than added at the end."
      },
      {
        "heading": "Monitoring and reporting sustainability",
        "body": "Choose measures that can actually be tracked, define how and when data will be collected, identify who is responsible, and report results in a way that supports decisions. The class activity asks you to name current measures, explain how they are monitored/reported, and suggest additional measures. Use evidence rather than a vague claim that the project is sustainable."
      }
    ],
    "quickCheck": [
      {
        "q": "What four considerations does the sustainability learning objective name?",
        "a": "Environmental, social, economic and administrative considerations."
      },
      {
        "q": "Where should sustainability targets be considered?",
        "a": "In the business case, aligned with relevant frameworks/standards such as the UN SDGs and ESG criteria."
      },
      {
        "q": "What makes a sustainability measure useful?",
        "a": "It is defined and trackable, with a method/frequency for monitoring, responsibility for collecting data and a clear reporting route."
      },
      {
        "q": "Why is sustainability not just an environmental issue?",
        "a": "The class objective also includes social, economic and administrative impacts."
      }
    ]
  },
  {
    "id": "business-case",
    "area": "Setting up for success",
    "title": "4. Business case",
    "summary": "Understand why the project should exist, what value it is expected to create, and how costs, risks and benefits support investment decisions.",
    "know": [
      "The business case explains why a project should be undertaken and supports investment and continuation decisions.",
      "Consider benefits, costs, risks, options and alignment with strategic objectives.",
      "The business case should remain relevant throughout the life cycle and be reviewed when significant assumptions, costs, risks or expected benefits change.",
      "Benefits describe measurable improvements or value; outputs are what the project delivers; outcomes describe changes resulting from using outputs."
    ],
    "apply": [
      "Use the business case to test whether a proposed change remains justified.",
      "Compare options rather than jumping straight to a preferred solution.",
      "Revisit the business case when major changes affect cost, schedule, risk or benefits."
    ],
    "distinctions": [
      "Output vs outcome vs benefit: what is delivered vs what changes because of it vs measurable improvement/value.",
      "Business case vs project management plan: why the investment is justified vs how the project will be delivered."
    ],
    "scenario": "A project has delivered its planned website, but users have not adopted it and the expected efficiency improvement has not occurred. Has the project automatically delivered its benefits?",
    "applyAnswer": "No. Delivering the website is an output; it does not automatically prove that the intended outcome or benefit has been achieved. The project should examine why adoption has not occurred, whether the business case remains valid and what actions are needed to enable the expected outcome and benefit to be realised.",
    "extraScenarios": [
      {
        "label": "Viability",
        "scenario": "A major risk has increased expected cost while the expected benefits remain unchanged. What should the PM do?",
        "answer": "The PM should reassess the business case and investment justification, including cost, risk and benefits. If the change affects viability, it should be escalated through the appropriate governance route rather than assuming the original justification still holds."
      }
    ],
    "studyNotes": [
      {
        "heading": "Purpose and contents of the business case",
        "body": "A business case justifies starting, investing in or continuing a project by evaluating benefits, costs and risks of alternative options and explaining the preferred solution. Common headings in the slides include options (including the do-nothing option), benefits/dis-benefits, scope and major deliverables, risks, costs, timescales and options appraisal. It may also include assumptions, dependencies, constraints, success criteria, initial stakeholder analysis and the reasons for change."
      },
      {
        "heading": "The five elements to remember",
        "body": "Strategic context: the compelling case for change. Economic analysis: return on investment and appraisal of options. Commercial approach: derived from the procurement strategy. Financial case: affordability within the required timeframe. Management approach: roles, governance structure, life-cycle choice and how the project will be managed."
      },
      {
        "heading": "PESTLE, SWOT and VUCA",
        "body": "PESTLE scans the external/internal context through Political, Economic, Social, Technological, Legal and Environmental factors. SWOT looks at Strengths (what helps us), Weaknesses (gaps/limitations), Opportunities (ways to improve or gain value) and Threats (what may go wrong). VUCA is used to consider volatility, uncertainty, complexity and ambiguity. Use the tool to identify factors that may influence the business case; do not just list the letters."
      },
      {
        "heading": "The business case is the baseline for justification",
        "body": "The slides state that the business case forms the baseline for the project and is reviewed periodically and at decision gates. In iterative work, review it at the end of each timebox. Check whether the investment remains desirable, viable and achievable and whether it is still expected to deliver benefits. A changed environment or negative impact from scope creep can mean the project needs to change or close early."
      },
      {
        "heading": "Why review changes against the business case?",
        "body": "Assess both positive and negative impacts on expected benefits; check that the project remains desirable, viable and achievable; identify scope creep that damages the justification; maintain stakeholder confidence; and improve decisions. A change should not be accepted only because it seems useful in isolation — assess what it does to the project’s overall justification."
      }
    ],
    "quickCheck": [
      {
        "q": "What is the purpose of a business case?",
        "a": "To justify initiation, investment or continuation by assessing benefits, costs, risks and options, and explaining the preferred solution."
      },
      {
        "q": "Name the five elements of the business case in the slides.",
        "a": "Strategic context, economic analysis, commercial approach, financial case and management approach."
      },
      {
        "q": "What does the “L” in PESTLE stand for?",
        "a": "Legal."
      },
      {
        "q": "What four areas does SWOT examine?",
        "a": "Strengths, weaknesses, opportunities and threats."
      },
      {
        "q": "When should the business case be reviewed?",
        "a": "Periodically and at decision gates; in iterative projects, at the end of each timebox."
      },
      {
        "q": "What three tests help decide whether the project remains justified?",
        "a": "Desirable, viable and achievable."
      }
    ]
  },
  {
    "id": "procurement",
    "area": "Preparing for change",
    "title": "5. Procurement",
    "summary": "Understand how a procurement strategy supports obtaining goods, services and resources and achieving appropriate value, quality and risk control.",
    "know": [
      "A procurement strategy sets out how required goods/services will be obtained and how supplier decisions will support project objectives.",
      "Consider make/buy decisions, market capability, timing, cost, quality, risk, contract type and organisational rules.",
      "Supplier reimbursement approaches can include fixed price, cost plus fee, per-unit quantity and target cost.",
      "Supplier selection should use defined criteria and a fair, controlled process appropriate to the organisation and procurement route.",
      "Contractual relationships allocate responsibilities, risks, rewards and obligations between parties."
    ],
    "apply": [
      "Select procurement and contract approaches that fit the uncertainty and risk profile.",
      "Define requirements and evaluation criteria clearly before supplier selection.",
      "Consider supply-chain risk, quality and schedule as well as price."
    ],
    "distinctions": [
      "Procurement strategy vs supplier selection: the overall approach to obtaining supply vs choosing a particular supplier.",
      "Fixed price vs cost-plus: supplier carries more cost risk under fixed price; cost-plus reimburses defined costs with an agreed fee."
    ],
    "scenario": "A project depends on a specialist component with uncertain supply and strict quality requirements. What should the procurement strategy address?",
    "applyAnswer": "The strategy should address the specialist requirement, supplier capability and availability, quality requirements, timing, supply-chain risk, contract approach, evaluation criteria and overall value. Because supply is uncertain, the team should understand and allocate the relevant risks rather than selecting a supplier on price alone.",
    "studyNotes": [
      {
        "heading": "Procurement strategy — the overall approach",
        "body": "Procurement is acquiring products or services from an external provider for a project, programme or portfolio. The procurement strategy is the high-level approach to securing the required goods/services. It covers how to acquire them, contracts and supplier selection, sourcing for best value, how risk is shared with suppliers and guidance on payment mechanisms. The slides say it should be developed with the business case and form part of the project management plan."
      },
      {
        "heading": "Make or buy; one or many suppliers",
        "body": "Make may use internal skills, retain ownership/control, allow bespoke design and build internal knowledge; it may be cheaper for a one-off. Buy may be faster, fill skill/capacity gaps, provide a guarantee/returns and include updates or bulk discounts. A single supplier can simplify coordination but creates a single point of failure. Multiple suppliers can create competition or parallel work but increase coordination/contract-management effort. An integrated supplier works alongside the project team."
      },
      {
        "heading": "Supplier selection process — learn the order",
        "body": "The slide sequence is: research the market and define requirements; pre-qualify suppliers (capability, financial stability, references); issue an Invitation to Tender (ITT) with instructions and evaluation criteria/scoring; respond to bidder queries and clarify requirements; receive and evaluate bids against criteria, compliance and added value; award the contract and agree binding terms/responsibilities; then administer the contract in line with the agreed terms. Follow the organisation’s governance rules and keep selection fair and transparent."
      },
      {
        "heading": "Plan the negotiation",
        "body": "Each party should define objectives and agree success criteria. Identify the BATNA (Best Alternative to a Negotiated Agreement), which is the fallback if no deal is reached. The ZOPA (Zone of Possible Agreement) is the bargaining zone where both sides could agree. A win-win approach aims for a balanced, collaborative deal and a relationship that can continue after signing. Avoid short-term wins that damage the wider organisation."
      },
      {
        "heading": "Contractual relationships and reimbursement",
        "body": "A contract creates legally binding obligations and sets out what happens if they are not met. The slides introduce single, parallel, sequential and prime contractual relationships. Reimbursement methods to recognise include fixed price, cost plus fee, per-unit quantity, target cost/price and time-and-materials. Choose by considering how clearly the work/quantity can be specified, who carries cost risk, how changes are handled and what behaviour the payment method encourages. The best method depends on the scenario; explain why."
      }
    ],
    "quickCheck": [
      {
        "q": "How is procurement different from the procurement strategy?",
        "a": "Procurement is the process of acquiring external products/services; the strategy is the high-level approach for doing it."
      },
      {
        "q": "Put the first three supplier-selection stages in order.",
        "a": "Research the market/define requirements → pre-qualify suppliers → issue an ITT."
      },
      {
        "q": "What does BATNA mean?",
        "a": "Best Alternative to a Negotiated Agreement — the fallback if agreement is not reached."
      },
      {
        "q": "What is ZOPA?",
        "a": "Zone of Possible Agreement — the bargaining range in which both parties could agree."
      },
      {
        "q": "Why might a single supplier be risky?",
        "a": "It can create a single point of failure if that supplier cannot deliver or goes out of business."
      },
      {
        "q": "Name three reimbursement methods from the slides.",
        "a": "Examples: fixed price, cost plus fee, per-unit quantity, target cost/price or time-and-materials."
      }
    ]
  },
  {
    "id": "reviews",
    "area": "Preparing for change",
    "title": "6. Reviews",
    "summary": "Understand how reviews gather evidence about progress, status, viability and learning at appropriate points in the life cycle.",
    "know": [
      "Reviews provide structured opportunities to assess progress, status, risks, decisions and continuing viability.",
      "Review timing should reflect project complexity, risk, life cycle and key milestones.",
      "Examples include decision gates, benefits reviews, audits and other project reviews.",
      "Reviews should produce decisions and actions, not simply meetings or paperwork.",
      "Lessons identified through reviews should feed future planning and improvement."
    ],
    "apply": [
      "Use review findings to re-plan, continue, change direction or stop work when justified.",
      "Tailor review depth and frequency to risk and complexity.",
      "Make actions, owners and deadlines clear."
    ],
    "distinctions": [
      "Review vs routine reporting: a review is a structured assessment; reporting provides ongoing information to stakeholders.",
      "Decision gate vs checkpoint: a gate can support a formal go/no-go or approval decision."
    ],
    "scenario": "A project reaches a phase boundary and its expected benefits have weakened significantly. What should the review focus on?",
    "applyAnswer": "The review should test whether the project remains viable and justified. It should examine the weakened benefits, assumptions, risks, costs, schedule, strategic alignment and available options, then make a clear decision or recommendation such as continue, change direction, re-plan or stop.",
    "studyNotes": [
      {
        "heading": "What is a project review?",
        "body": "The slides define project reviews as taking place throughout the project life cycle to check likely or actual achievement of the objectives in the project management plan. Reviews should inform decisions and actions, not just create paperwork."
      },
      {
        "heading": "Know the different review types",
        "body": "Decision/gate reviews: formal go/no-go decisions; in a linear life cycle they are event-driven, while in an iterative life cycle they are time-bound. Benefits reviews: typically held 6–12 months after handover to check whether benefits have been achieved and what further action is needed; the slides say they are typically undertaken by the sponsor. Audits: assess compliance with agreed governance/processes and are commonly done by independent personnel such as PMO, internal audit or third parties. The slides also show project evaluation and post-project reviews."
      },
      {
        "heading": "Benefits of reviewing throughout the life cycle",
        "body": "Reviews of products can improve quality control. Reviews of the business case at set points test continuing desirability, viability and achievability, increasing stakeholder confidence and buy-in. Reviews of management processes assess integrity and effectiveness and can improve delivery efficiency. Review outputs also improve decision-making."
      },
      {
        "heading": "What should be reported?",
        "body": "The slides highlight progress against schedule; actual spend against planned spend; earned value (spend compared with the value of work achieved); audit findings/non-conformances; and risks (threats and opportunities) and issues. Reports help the sponsor and team understand status and decide whether corrective action or escalation is needed."
      },
      {
        "heading": "Why collect data and re-plan?",
        "body": "Useful information helps compare status with acceptance criteria in the PMP, make realistic schedules and cost estimates using past data, decide corrective actions/escalations, solve problems using past experience, support decisions and plan quality activities. Re-planning may be needed when scope quality is below requirement, team motivation/satisfaction is low, contractor/supply-chain performance is poor, committed costs or cash flow exceed forecasts, the risk profile changes and time/cost contingency must be reconsidered, or stakeholder communication is ineffective."
      }
    ],
    "quickCheck": [
      {
        "q": "What is the key purpose of a project review?",
        "a": "To assess likely or actual achievement of objectives in the PMP and inform decisions/actions."
      },
      {
        "q": "What kind of decision does a gate review make?",
        "a": "A go/no-go decision about whether to proceed."
      },
      {
        "q": "When is a benefits review typically held according to the slides?",
        "a": "Around 6–12 months after handover, during benefits realisation."
      },
      {
        "q": "Name four things a sponsor may expect in a progress report.",
        "a": "Schedule progress, actual vs planned spend, earned value, audit/non-conformance findings, risks and issues."
      },
      {
        "q": "Give two reasons a project might need to re-plan after a review.",
        "a": "Examples: quality below requirements, low team motivation, poor contractor/supply-chain performance, cost/cash-flow over forecast, changed risks/contingencies, or weak stakeholder communication."
      }
    ]
  },
  {
    "id": "assurance",
    "area": "Preparing for change",
    "title": "7. Assurance",
    "summary": "Understand assurance as independent confidence that a project is being governed and delivered effectively and remains capable of achieving its objectives.",
    "know": [
      "Assurance provides confidence to governance that a project is on track to deliver objectives and intended value.",
      "Assurance should be sufficiently independent and objective.",
      "Assurance can examine governance, risk, controls, plans, progress, quality and compliance.",
      "Assurance is not the same as the project manager checking their own work.",
      "Findings should lead to proportionate actions and escalation where necessary."
    ],
    "apply": [
      "Use assurance to challenge assumptions and provide evidence-based confidence.",
      "Ensure assurance activity has clear scope, responsibilities and access to appropriate information.",
      "Respond constructively to findings rather than treating assurance as a threat."
    ],
    "distinctions": [
      "Assurance vs quality control: assurance gives confidence that appropriate processes and controls are being applied; quality control checks outputs against requirements.",
      "Assurance vs audit: audit is a particular form of independent examination; assurance is the broader confidence-giving activity."
    ],
    "scenario": "A project manager reports that everything is on track, but an independent review identifies weak risk controls. Why is assurance valuable here?",
    "applyAnswer": "Assurance provides independent, objective confidence to governance rather than relying solely on the PM's own report. The finding about weak risk controls gives decision makers evidence that the project may not be as well controlled as reported, allowing corrective action or escalation before the weakness causes a larger problem.",
    "extraScenarios": [
      {
        "label": "Assurance",
        "scenario": "The PM has completed their own checks and says the project is compliant. Governance asks for independent confidence. What is the value of assurance?",
        "answer": "Independent assurance provides an objective challenge and confidence beyond the project team's own self-checking. It can test whether governance, controls and plans are actually working as intended."
      }
    ]
  },
  {
    "id": "transition",
    "area": "Preparing for change",
    "title": "8. Transition management",
    "summary": "Understand how project outputs move into business-as-usual and how adoption enables intended outcomes and benefits.",
    "know": [
      "Transition is the movement from project delivery into operational use.",
      "Handover should be planned from the start rather than treated as a final-day event.",
      "Consider operational readiness, users, training, support, data, documentation, ownership and acceptance.",
      "Outputs are not automatically benefits: the organisation must adopt and use them effectively.",
      "Transition can be incremental, especially where outputs are released progressively."
    ],
    "apply": [
      "Identify the receiving business/operational owner early.",
      "Define acceptance and readiness criteria before handover.",
      "Transfer knowledge, documentation, responsibilities and support arrangements."
    ],
    "distinctions": [
      "Handover vs closure: handover transfers outputs into use; closure formally completes the project and its administration.",
      "Output vs benefit: delivery of the thing does not guarantee the improvement it was intended to create."
    ],
    "scenario": "A new system is technically complete but staff have not been trained and support arrangements are not ready. Is the project ready for successful transition?",
    "applyAnswer": "No. Technical completion is not the same as operational readiness. Successful transition requires trained users, support arrangements, ownership, documentation, acceptance and readiness for the receiving organisation. These gaps should be addressed before or as part of an agreed transition plan."
  },
  {
    "id": "benefits",
    "area": "Preparing for change",
    "title": "9. Benefits management",
    "summary": "Understand how benefits are identified, defined, planned, tracked and realised.",
    "know": [
      "Benefits are measurable improvements or value perceived by stakeholders.",
      "Benefits management covers identification, definition, planning, tracking and realisation.",
      "Benefit owners should be identified where appropriate because benefits often continue after project closure.",
      "Benefits should link back to the business case and strategic objectives.",
      "Dis-benefits are negative impacts that may arise from a change and should also be considered."
    ],
    "apply": [
      "Define how and when each benefit will be measured.",
      "Track benefits rather than assuming they will appear because outputs were delivered.",
      "Update benefit expectations when the project or operating environment changes."
    ],
    "distinctions": [
      "Output vs outcome vs benefit: deliverable vs change in behaviour/state vs measurable improvement/value.",
      "Benefit realisation vs project completion: benefits may continue after the project team has closed."
    ],
    "scenario": "A project delivers a new automated process. The output is live, but the expected saving will only appear if staff change how they work. What should benefits management address?",
    "applyAnswer": "Benefits management should identify the required behaviour or business change, the owner of that change, the baseline and target measures, and when/how the saving will be measured. The project output enables the change, but the benefit may only be realised after the organisation adopts the new way of working.",
    "extraScenarios": [
      {
        "label": "Output vs benefit",
        "scenario": "A new booking system is delivered and works correctly, but waiting times have not reduced. What should the PM investigate?",
        "answer": "The output has been delivered, but the intended outcome and benefit have not necessarily been realised. Benefits management should investigate adoption, process change, baseline measures and the conditions required for the benefit to occur."
      }
    ]
  },
  {
    "id": "stakeholders",
    "area": "People and behaviours",
    "title": "10. Stakeholder engagement & communication",
    "summary": "Understand how to identify, analyse, communicate with and engage stakeholders so that the project has the support and information needed to succeed.",
    "know": [
      "Stakeholders are people or organisations that can affect, be affected by, or perceive themselves to be affected by the project.",
      "Stakeholder analysis considers interests, influence, impact, requirements and attitudes.",
      "Engagement should be tailored to the stakeholder and the project context.",
      "A communication plan identifies what needs communicating, to whom, when, by whom, how and why.",
      "Communication is two-way: listening and feedback matter as much as sending information."
    ],
    "apply": [
      "Map stakeholders early and revisit the analysis as the project changes.",
      "Choose communication channels based on the message, audience, urgency, complexity and need for feedback.",
      "Manage expectations honestly and explain impacts of decisions and changes."
    ],
    "distinctions": [
      "Communication vs engagement: transmitting/receiving information vs building understanding, support and commitment.",
      "Influence vs interest: a stakeholder may have high influence but low day-to-day interest, requiring a different approach."
    ],
    "scenario": "A senior stakeholder has high influence but little time and is becoming concerned about a project. How might you adapt engagement?",
    "applyAnswer": "The PM should recognise the stakeholder's high influence and concern, then tailor engagement accordingly. Keep the stakeholder appropriately informed, focus communication on what matters to them, provide concise evidence and create opportunities for questions or decisions. The aim is to manage expectations and maintain support rather than simply sending more information."
  },
  {
    "id": "conflict",
    "area": "People and behaviours",
    "title": "11. Conflict resolution",
    "summary": "Understand sources of project conflict and how negotiation and conflict-management approaches can be selected for the situation.",
    "know": [
      "Conflict can arise from competing priorities, scarce resources, unclear roles, personality differences, objectives, communication problems or stakeholder interests.",
      "Conflict is not automatically harmful; constructive challenge can improve decisions.",
      "Responses should consider the cause, importance, relationships, urgency and desired outcome.",
      "Negotiation may be collaborative or competitive and can be formal or informal.",
      "BATNA is the best alternative to a negotiated agreement; ZOPA is the zone in which acceptable agreements may overlap."
    ],
    "apply": [
      "Address the underlying cause rather than simply the visible disagreement.",
      "Use evidence, active listening and clear interests when negotiating.",
      "Choose an approach proportionate to the situation and preserve important working relationships."
    ],
    "distinctions": [
      "Position vs interest: what someone says they want vs why they want it.",
      "BATNA vs ZOPA: your best alternative if no agreement is reached vs the range in which agreement may be possible."
    ],
    "scenario": "Two teams both need the same specialist resource at the same time. How could the project manager resolve the conflict without simply choosing one team?",
    "applyAnswer": "The PM should understand the underlying interests and constraints of both teams, establish the facts and explore options such as sequencing the work, sharing the specialist, changing priorities or finding additional capacity. The aim is to reach a workable agreement while protecting project objectives and relationships, rather than imposing a solution without understanding the cause of the conflict."
  },
  {
    "id": "leadership",
    "area": "People and behaviours",
    "title": "12. Leadership",
    "summary": "Understand how leadership affects motivation, performance, trust and delivery, and why leadership style should adapt to the situation.",
    "know": [
      "Leadership provides vision, direction, support and influence to help people achieve project objectives.",
      "Different situations and levels of team maturity may require different leadership approaches.",
      "Motivation theories such as Maslow, Herzberg and McGregor provide ways of thinking about motivation.",
      "Coaching and mentoring can develop capability and ownership.",
      "Emotional intelligence supports self-awareness, empathy, relationship management and effective leadership."
    ],
    "apply": [
      "Adapt leadership style to capability, confidence, urgency and context.",
      "Use coaching to help people develop solutions rather than always giving answers.",
      "Build trust through consistency, communication, support and appropriate challenge."
    ],
    "distinctions": [
      "Leadership vs management: influencing and enabling people toward a goal vs planning, organising and controlling work; effective PMs need both.",
      "Coaching vs mentoring: coaching often focuses on helping someone find solutions and improve performance; mentoring draws on experience to support development."
    ],
    "scenario": "A highly capable team is becoming frustrated by excessive direction from the project manager. What leadership adjustment might improve performance?",
    "applyAnswer": "The PM should reduce unnecessary direction and use a more empowering or coaching approach. A capable team may perform better when given clear objectives, boundaries and authority to decide how to achieve them. The PM should remain available for support, challenge and escalation rather than micromanaging."
  },
  {
    "id": "teams",
    "area": "People and behaviours",
    "title": "13. Team management",
    "summary": "Understand how teams form, develop, perform and adapt, including the needs of virtual and hybrid teams.",
    "know": [
      "Teams develop through stages; Tuckman's model is a common framework: forming, storming, norming, performing and adjourning.",
      "Effective teams have clear purpose, roles, accountability, communication and trust.",
      "Belbin and other models can help explore team roles or characteristics, but models are tools rather than labels.",
      "Virtual and hybrid teams need deliberate communication, inclusion, coordination and relationship building.",
      "Team management includes creating, developing, maintaining and leading the team."
    ],
    "apply": [
      "Diagnose what the team needs at its current development stage.",
      "Clarify roles and interfaces, especially where people are distributed.",
      "Use regular communication and feedback to maintain team effectiveness."
    ],
    "distinctions": [
      "Team role vs job role: a behavioural contribution to the team vs formal responsibilities.",
      "Team development vs team performance: how the team matures vs how effectively it currently delivers."
    ],
    "scenario": "A newly formed project team is experiencing disagreements over responsibilities. Which stage might this indicate and what should the PM do?"
  },
  {
    "id": "diversity",
    "area": "People and behaviours",
    "title": "14. Diversity & inclusion",
    "summary": "Understand how diverse perspectives, fair treatment and inclusive behaviours affect team performance, innovation and project outcomes.",
    "know": [
      "Diversity includes differences between people and the perspectives, experiences and capabilities they bring.",
      "Inclusion means creating an environment where people can contribute fairly and feel able to participate.",
      "Conscious and unconscious bias can affect decisions and behaviours.",
      "Different communication, accessibility and working needs should be considered.",
      "Diverse thinking can improve innovation and challenge assumptions."
    ],
    "apply": [
      "Design participation and communication so people have a fair opportunity to contribute.",
      "Challenge bias in decisions and assumptions.",
      "Use diverse perspectives deliberately when solving problems and making decisions."
    ],
    "distinctions": [
      "Diversity vs inclusion: having differences represented vs ensuring those differences can contribute meaningfully.",
      "Equality vs equity: treating people fairly may require adjustments to account for different needs."
    ],
    "scenario": "A team repeatedly hears ideas only from the loudest members. What could the PM do to create a more inclusive decision-making environment?",
    "applyAnswer": "The PM should deliberately create opportunities for quieter members to contribute, for example through structured turn-taking, written input before discussion or facilitated decision-making. The PM should challenge dominance and bias and ensure that different perspectives are considered rather than allowing the loudest voices to determine the outcome."
  },
  {
    "id": "ethics",
    "area": "People and behaviours",
    "title": "15. Ethics, compliance & professionalism",
    "summary": "Understand the moral, legal, regulatory and professional responsibilities involved in project work.",
    "know": [
      "Professionalism includes maintaining competence, acting responsibly and continuing professional development.",
      "Projects operate within legal and regulatory environments relevant to their sector and location.",
      "Compliance can affect working conditions, governance, risk, sustainability, contracts, data and delivery methods.",
      "Project professionals should seek specialist advice where they lack the required expertise.",
      "Ethical behaviour includes acting honestly, transparently and responsibly and recognising conflicts or inappropriate influence."
    ],
    "apply": [
      "Identify relevant laws, regulations, policies, standards and professional obligations early.",
      "Escalate concerns appropriately rather than ignoring them to protect schedule or cost.",
      "Keep knowledge current and recognise personal competence gaps."
    ],
    "distinctions": [
      "Ethics vs compliance: doing what is morally/professionally responsible vs meeting formal legal/regulatory requirements; good practice requires attention to both.",
      "Competence gap vs lack of effort: recognise when specialist advice or development is required."
    ],
    "scenario": "A project can save time by bypassing a required control. What should the project manager consider before allowing the shortcut?",
    "applyAnswer": "The PM should first establish what control is required and why, including relevant law, regulation, policy, standards, safety or professional obligations. A schedule saving does not justify bypassing a mandatory control. If the control creates a genuine problem, the issue should be raised through the appropriate governance route and an authorised alternative considered."
  },
  {
    "id": "requirements",
    "area": "Planning & managing deployment",
    "title": "16. Requirements management",
    "summary": "Understand how requirements are gathered, analysed, justified, agreed, baselined and controlled.",
    "know": [
      "Requirements describe what stakeholders need from the project or solution.",
      "Requirements management includes gathering, analysing, prioritising, justifying, agreeing and maintaining requirements.",
      "Requirements should be traceable to stakeholder needs, objectives and acceptance criteria.",
      "Baselining creates an agreed reference point against which change can be controlled.",
      "Configuration management controls identified items, their versions/status and approved changes."
    ],
    "apply": [
      "Engage the right stakeholders when gathering and validating requirements.",
      "Prioritise requirements where time, cost or resources are constrained.",
      "Use traceability and configuration control to understand the impact of changes."
    ],
    "distinctions": [
      "Requirement vs solution: what needs to be achieved vs how it will be achieved.",
      "Requirement vs scope: an individual need/condition vs the defined boundary of what the project will deliver."
    ],
    "scenario": "A stakeholder asks for an extra feature after the requirements baseline has been agreed. What should happen before work begins?",
    "applyAnswer": "The feature should not simply be added. The request should be captured and assessed for its effect on requirements, scope, benefits, cost, schedule, quality, risk and other dependencies. It should then go through the agreed change/control and approval process before implementation if it changes the baseline."
  },
  {
    "id": "solutions",
    "area": "Planning & managing deployment",
    "title": "17. Solutions development",
    "summary": "Understand how options are identified, evaluated and refined to select the optimal solution for agreed requirements.",
    "know": [
      "Solutions development starts with clarity about the problem and agreed requirements.",
      "Multiple options should be considered where appropriate before selecting a preferred solution.",
      "Options can be assessed against criteria such as cost, time, quality, risk, benefits, feasibility and sustainability.",
      "Iterative life cycles may use approaches such as minimum viable product (MVP) and incremental releases.",
      "The best solution is not necessarily the most technically impressive one; it should satisfy the agreed requirements and value case."
    ],
    "apply": [
      "Define evaluation criteria before comparing options.",
      "Balance requirements, value, risk, cost, time and feasibility.",
      "Use prototypes or incremental delivery when feedback and uncertainty make them valuable."
    ],
    "distinctions": [
      "Requirement vs option vs solution: need/condition vs possible way forward vs selected/refined way of satisfying it.",
      "MVP vs gold-plated solution: sufficient initial value and learning vs unnecessary additional features."
    ],
    "scenario": "A team wants to build many features that users have not requested. What should the PM ask before approving the work?",
    "applyAnswer": "The PM should first ask what problem the features solve and whether they trace back to validated requirements, user needs, benefits and the business case. Building unrequested features can consume time and money without creating value. Options should be evaluated against agreed criteria before work is authorised."
  },
  {
    "id": "quality",
    "area": "Planning & managing deployment",
    "title": "18. Quality management",
    "summary": "Understand how quality is planned, assured and controlled so outputs are fit for purpose and meet agreed requirements.",
    "know": [
      "Quality planning defines what good looks like, the standards/acceptance criteria and how quality will be achieved and measured.",
      "Quality indicators should connect to requirements, success criteria and the business case.",
      "Quality assurance provides confidence that appropriate processes and standards are being applied.",
      "Quality control checks outputs/results against defined requirements and standards.",
      "Continuous improvement uses learning and data to improve processes and outcomes."
    ],
    "apply": [
      "Build quality activities and acceptance criteria into the plan rather than leaving them to the end.",
      "Use assurance to check whether the right processes are being followed.",
      "Use quality control to identify defects or non-conformance and trigger corrective action."
    ],
    "distinctions": [
      "Quality assurance vs quality control: confidence in the process/system vs checking the resulting output.",
      "Quality vs gold plating: meeting agreed requirements and being fit for purpose vs adding unnecessary features."
    ],
    "scenario": "Testing finds that a deliverable does not meet an agreed acceptance criterion. Is this primarily a quality assurance activity or quality control activity?",
    "applyAnswer": "This is primarily quality control because testing has identified a deliverable that does not meet an agreed acceptance criterion. Quality assurance is concerned with confidence that the appropriate processes and controls are being used; quality control checks the actual output and identifies defects or non-conformance.",
    "extraScenarios": [
      {
        "label": "QA vs QC",
        "scenario": "A project reviews whether its agreed testing process is being followed before testing begins. Is this more closely assurance or control?",
        "answer": "This is more closely quality assurance because it is checking whether the appropriate process and controls are in place and being followed. Quality control would examine the resulting product/output for defects or non-conformance."
      }
    ]
  },
  {
    "id": "integrated-planning",
    "area": "Planning & managing deployment",
    "title": "19. Integrated planning",
    "summary": "Understand how scope, quality, time, cost, resources, risks, issues, communication and benefits are brought together in an integrated project management plan.",
    "know": [
      "An integrated plan brings together the key plans and controls needed to manage delivery.",
      "It should reflect the chosen life cycle, governance, constraints, assumptions, dependencies and tolerances.",
      "Typical components include scope, requirements, quality, schedule, resources, cost, risk/issues, communication, benefits and completion criteria.",
      "Baselines provide approved reference points for monitoring and control.",
      "Planning is progressive: detail can increase as uncertainty reduces."
    ],
    "apply": [
      "Check that changes in one area are assessed for impacts on other areas.",
      "Use the integrated plan as a management tool, not simply a document created for approval.",
      "Gain commitment from relevant stakeholders to the planned approach."
    ],
    "distinctions": [
      "Integrated plan vs schedule: the integrated plan covers multiple management areas; the schedule focuses on time-based activities and dependencies.",
      "Baseline vs forecast: an approved reference point vs the current expected outcome."
    ],
    "scenario": "A two-week delay in a key activity affects cost, resources and a benefit milestone. Why should the PM update more than the schedule?",
    "applyAnswer": "The delay can affect cost, resource availability, dependencies, benefits and potentially risk and stakeholder commitments. An integrated plan exists so that changes in one area are assessed for their effects elsewhere. Updating only the schedule could hide the wider consequences and lead to inconsistent plans."
  },
  {
    "id": "schedule",
    "area": "Planning & managing deployment",
    "title": "20. Schedule management",
    "summary": "Understand how activities, dependencies, resources and time constraints are planned, monitored and optimised.",
    "know": [
      "A schedule shows when activities/events are planned and how they depend on one another.",
      "Gantt charts are a common way of presenting schedule information.",
      "Critical path identifies the sequence of activities that determines the shortest possible project duration under the model used.",
      "Critical chain considers resource constraints as well as dependencies and includes concepts such as buffers.",
      "Resource smoothing works within available resource limits without changing the project end date where possible; resource levelling may change dates to resolve over-allocation.",
      "Schedules should be monitored, re-estimated and updated through appropriate change control."
    ],
    "apply": [
      "Identify dependencies and critical activities before promising dates.",
      "Use actual progress and reliable estimates to update the schedule.",
      "Communicate the impact of schedule changes on other activities, resources and stakeholders."
    ],
    "distinctions": [
      "Critical path vs critical chain: dependency-driven critical sequence vs resource-constrained approach.",
      "Smoothing vs levelling: adjust resource timing within available float where possible vs change activity timing to resolve resource conflicts."
    ],
    "scenario": "Two critical activities require the same specialist at the same time. What scheduling/resource problem exists and what could the PM consider?",
    "applyAnswer": "The problem is resource contention/over-allocation: two activities require the same specialist simultaneously. The PM could examine priorities and dependencies, use resource smoothing if float allows, consider levelling if dates must move, sequence the work differently or obtain additional capacity. The choice should reflect project priorities and constraints."
  },
  {
    "id": "resources",
    "area": "Planning & managing deployment",
    "title": "21. Resource management",
    "summary": "Understand how people and non-labour resources are identified, allocated, scheduled, monitored and optimised.",
    "know": [
      "Resource management identifies what resources are needed, when they are needed and whether they are available.",
      "Consider labour and non-labour resources, skills, capacity, availability, dependencies and constraints.",
      "An organisational breakdown structure can help show organisational responsibilities; combined with a work breakdown structure it can support a responsibility assignment matrix.",
      "RACI is a common responsibility assignment approach: Responsible, Accountable, Consulted, Informed.",
      "Resource smoothing and levelling are used to address resource constraints and over-allocation."
    ],
    "apply": [
      "Check resource availability rather than assuming a named person is available.",
      "Resolve resource contention through prioritisation, negotiation, scheduling or additional capacity.",
      "Monitor actual resource use and update plans when circumstances change."
    ],
    "distinctions": [
      "Responsible vs accountable: the person doing the work vs the person ultimately answerable for it.",
      "Resource management vs resource capacity planning: project-level deployment vs broader organisational planning of future capacity."
    ],
    "scenario": "A task has three people working on it, but no one has final ownership for accepting the result. Which RACI role is missing or unclear?",
    "applyAnswer": "Accountable is missing or unclear. Responsible people perform the work, while the Accountable person has final ownership and is answerable for the result. The PM should clarify who is accountable so that responsibility for acceptance and decisions is unambiguous."
  },
  {
    "id": "budget",
    "area": "Planning & managing deployment",
    "title": "22. Budgeting & cost control",
    "summary": "Understand how costs are estimated, budgets are established, financial performance is monitored and forecasts are refined.",
    "know": [
      "Budgets bring together expected costs and provide an agreed financial baseline/control point.",
      "Know common cost categories such as fixed, variable, direct and indirect costs.",
      "Consider capital and revenue expenditure where relevant to the organisation.",
      "Monitor actual, forecast, committed and accrued costs as appropriate.",
      "Forecasts should be refined when new information changes the expected final cost.",
      "Earned value management can integrate scope, schedule and cost performance using measures such as planned value, earned value and actual cost."
    ],
    "apply": [
      "Investigate the cause of cost variance rather than treating the number as the answer.",
      "Report financial information in a way appropriate to the stakeholder.",
      "Use approved change control when proposed changes affect the budget."
    ],
    "distinctions": [
      "Budget vs forecast: agreed financial plan/reference point vs current prediction of future cost.",
      "Actual cost vs earned value: what has been spent vs the value of work actually achieved according to the measurement system."
    ],
    "scenario": "Actual spending is below budget but less work has been completed than planned. Why might this not mean the project is performing well?",
    "applyAnswer": "Low spending is not automatically good performance because spending must be considered alongside the amount of work actually achieved. If less work has been completed than planned, the project may be behind even though it has spent less. The PM should investigate cost and schedule performance together and understand the forecast final position."
  },
  {
    "id": "risk-issues",
    "area": "Planning & managing deployment",
    "title": "23. Risk & issue management",
    "summary": "Understand how uncertainty is identified, assessed and responded to, and how actual issues are managed and escalated.",
    "know": [
      "A risk is an uncertain event or condition that, if it occurs, can affect objectives; risks can be threats or opportunities.",
      "An issue is something that has happened or is sufficiently certain/forecast to require management action.",
      "Risk management is proactive; issue management is reactive.",
      "Risk process: identify, assess/analyse, plan response, implement/monitor, close/transfer ownership as appropriate.",
      "Threat responses can include avoid, reduce, transfer and accept; opportunity responses can include exploit, enhance, share and accept.",
      "Risk registers record risk information; issue logs record issues and their management.",
      "Risk appetite and tolerance influence what level of risk is acceptable and when escalation is required."
    ],
    "apply": [
      "Do not label something by keywords alone; decide whether the uncertain event has happened and what action is required.",
      "Assess probability and impact and prioritise proportionately.",
      "Escalate issues or risks when they exceed authority or agreed tolerance.",
      "Consider the effect of responses on the business case, schedule, cost and stakeholders."
    ],
    "distinctions": [
      "Risk vs issue: uncertainty vs something that has happened/needs action.",
      "Risk response vs contingency: planned response to a risk vs actions/resources prepared for a consequence if it occurs.",
      "Threat vs opportunity: possible negative impact vs possible positive impact."
    ],
    "scenario": "A supplier says delivery will definitely be two weeks late. Is this a risk or an issue? Explain why.",
    "applyAnswer": "It is an issue because the supplier has stated that the delay is definite rather than uncertain. The event has effectively occurred as a forecast deviation requiring management action. The PM should assess the impact, record it, determine whether it exceeds tolerance and escalate or assign ownership as appropriate.",
    "extraScenarios": [
      {
        "label": "Risk or issue",
        "scenario": "A supplier might be two weeks late if a shipping problem occurs. Is this a risk or an issue?",
        "answer": "It is a risk because the late delivery is uncertain. The PM should assess probability and impact and plan an appropriate response rather than treating the delay as an existing issue."
      }
    ]
  },
  {
    "id": "change-control",
    "area": "Planning & managing deployment",
    "title": "24. Change control",
    "summary": "Understand how proposed changes to an agreed baseline are identified, evaluated, approved/rejected/deferred and implemented in a controlled way.",
    "know": [
      "Change control manages variations to agreed baselines such as scope, requirements, cost or schedule.",
      "A typical process includes request, initial assessment, detailed impact assessment, recommendation/decision, updating plans/baselines and implementation.",
      "Impact assessment should consider scope, benefits, time, cost, quality, resources, risk, dependencies and stakeholders.",
      "Changes should be approved by the appropriate authority under the governance arrangement.",
      "Configuration management helps maintain the integrity and status of controlled items."
    ],
    "apply": [
      "Do not allow uncontrolled scope changes simply because they seem small.",
      "Make the impact and trade-offs visible to the decision maker.",
      "Communicate approved changes and update the relevant plans, records and baselines."
    ],
    "distinctions": [
      "Change control vs configuration management: controlling whether/how changes are approved vs controlling the identity/status/version of controlled items.",
      "Change request vs approved change: a proposal for alteration vs an authorised decision."
    ],
    "scenario": "A stakeholder asks a developer to add a feature directly because it will only take a day. What should the project manager do?",
    "applyAnswer": "The developer should not implement the request informally. The change should be captured, its impact assessed and the appropriate authority should decide whether to approve, reject or defer it. If approved, the relevant plans, baselines, configuration records and stakeholders should be updated and the change implemented in a controlled way.",
    "extraScenarios": [
      {
        "label": "Small change",
        "scenario": "A developer says a requested feature will take only one hour and will have no obvious technical impact. Can they add it immediately?",
        "answer": "Not automatically. The request still needs to be assessed against the agreed baseline and governance. Even a small change can have consequences for scope, requirements, testing, documentation, benefits or configuration, so it should follow the agreed change-control process."
      }
    ]
  }
];
