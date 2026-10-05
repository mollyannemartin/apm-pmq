const PMQ_TOPICS = [
  {
    "id": "life-cycles",
    "area": "Setting up for success",
    "title": "1. Life cycles",
    "summary": "Understand how linear, iterative and hybrid life cycles structure project delivery, why phases and reviews are used, and how knowledge and information support decisions.",
    "know": [
      "Linear: work progresses through defined phases with relatively stable scope and planned sequencing.",
      "Iterative: the solution is developed in repeated cycles, using feedback to refine what is delivered.",
      "Hybrid: combines linear and iterative approaches where different parts of the project need different delivery approaches.",
      "Projects may be structured into phases to create decision points, manage uncertainty and support progressive approval.",
      "Extended life cycle includes the period beyond project delivery into transition, adoption and benefits realisation.",
      "Knowledge management captures and shares learning; information management makes relevant information available for decisions."
    ],
    "apply": [
      "Choose a life cycle that fits the level of uncertainty, how stable requirements are, the need for feedback, and the environment in which the project operates.",
      "Use phase reviews or decision gates to assess whether the project remains viable before committing further resources.",
      "Use lessons learned and reliable information to improve decisions rather than simply storing documents."
    ],
    "distinctions": [
      "Linear vs iterative: planned sequence and relatively stable scope vs repeated development and feedback.",
      "Project life cycle vs extended life cycle: delivery of the project vs the wider period through transition/adoption and benefits realisation.",
      "Review vs assurance: a review assesses progress/viability; assurance provides confidence to governance that the project is on track."
    ],
    "scenario": "A project has uncertain user requirements and needs regular user feedback. Which life cycle is likely to be more suitable, and why?",
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
    ]
  },
  {
    "id": "governance",
    "area": "Setting up for success",
    "title": "2. Governance arrangements",
    "summary": "Understand how governance provides direction, accountability, decision rights, controls and oversight.",
    "know": [
      "Governance defines how a project is directed, controlled and held accountable.",
      "Know the purpose of policies, regulations, functions, processes, procedures and delegated responsibilities.",
      "Understand the roles of the project sponsor, project manager, project team, users and governance board/steering group.",
      "Project managers manage delivery within delegated authority; sponsors provide senior ownership, direction and support.",
      "Governance should be proportionate: enough control to protect the project without creating unnecessary bureaucracy.",
      "PMOs can provide support, standards, reporting, methods and coordination."
    ],
    "apply": [
      "Escalate decisions when they exceed your authority or agreed tolerances.",
      "Make roles, responsibilities and decision rights clear at project initiation.",
      "Use governance arrangements to maintain alignment with organisational objectives."
    ],
    "distinctions": [
      "Governance vs management: governance sets direction, oversight and accountability; management coordinates and controls delivery.",
      "Project manager vs sponsor: the PM manages day-to-day delivery; the sponsor owns the business need and provides senior direction.",
      "PMO vs project team: a PMO supports governance, standards and coordination; the project team performs delivery work."
    ],
    "scenario": "A project is forecast to exceed an agreed tolerance. What should the project manager do rather than quietly absorbing the variance?",
    "applyAnswer": "The PM should assess the forecast against the agreed tolerance and escalate through the governance route if the tolerance will be exceeded. The PM should not simply absorb the variance because tolerances define the authority delegated to the PM. The appropriate decision maker can then decide the response, such as corrective action, re-planning or accepting a justified change.",
    "extraScenarios": [
      {
        "label": "Tolerance",
        "scenario": "The PM can keep a delay within the agreed time tolerance, but a decision would affect the project sponsor's financial tolerance. What should happen?",
        "answer": "The PM can manage within delegated authority only where the relevant tolerance remains within their authority. If the financial impact exceeds the PM's delegated tolerance, the matter should be escalated through governance for a decision."
      },
      {
        "label": "Decision rights",
        "scenario": "A project team member wants to approve a significant scope decision because the sponsor is unavailable. What should the PM check first?",
        "answer": "The PM should check the agreed governance arrangements and delegated authority. A decision should be made by the person or body with the appropriate authority, or escalated if the decision exceeds the team member's authority."
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
    "applyAnswer": "The team should compare the options using whole-life value, not purchase price alone. The lower-energy option may have higher upfront cost but lower operating impact and may support environmental, social or economic objectives. The decision should consider the project's requirements, business case, risks, benefits and relevant stakeholder priorities."
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
    "applyAnswer": "The strategy should address the specialist requirement, supplier capability and availability, quality requirements, timing, supply-chain risk, contract approach, evaluation criteria and overall value. Because supply is uncertain, the team should understand and allocate the relevant risks rather than selecting a supplier on price alone."
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
    "applyAnswer": "The review should test whether the project remains viable and justified. It should examine the weakened benefits, assumptions, risks, costs, schedule, strategic alignment and available options, then make a clear decision or recommendation such as continue, change direction, re-plan or stop."
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
