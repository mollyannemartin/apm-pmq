const topics = [
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
const quizQuestions = [
  {
    "q": "Which life cycle is most suited to uncertain requirements requiring repeated customer feedback?",
    "options": [
      "Linear",
      "Iterative",
      "No life cycle",
      "Fixed-price"
    ],
    "answer": 1,
    "explain": "Iterative delivery supports repeated development and feedback."
  },
  {
    "q": "What is the primary purpose of governance?",
    "options": [
      "To perform every project task",
      "To provide direction, control and accountability",
      "To eliminate all risk",
      "To write the schedule"
    ],
    "answer": 1,
    "explain": "Governance establishes direction, decision rights, oversight and accountability."
  },
  {
    "q": "Which best describes a benefit?",
    "options": [
      "A project document",
      "A delivered product only",
      "A measurable improvement or value",
      "A task on a schedule"
    ],
    "answer": 2,
    "explain": "Benefits are improvements/value perceived by stakeholders; outputs are what the project delivers."
  },
  {
    "q": "Which is most characteristic of assurance?",
    "options": [
      "Independent confidence to governance",
      "Writing code",
      "Performing every test",
      "Approving every invoice"
    ],
    "answer": 0,
    "explain": "Assurance provides objective confidence that the project is on track and controlled."
  },
  {
    "q": "A supplier confirms a delivery will definitely be two weeks late. Risk or issue?",
    "options": [
      "Risk",
      "Issue",
      "Benefit",
      "Opportunity"
    ],
    "answer": 1,
    "explain": "The uncertainty has materialised; it now requires management action."
  },
  {
    "q": "What does BATNA mean?",
    "options": [
      "Best Alternative To a Negotiated Agreement",
      "Baseline Approved Technical Needs Assessment",
      "Business Analysis Tracking and Negotiation Approach",
      "Benefits Assessment Through Negotiated Agreement"
    ],
    "answer": 0,
    "explain": "BATNA is the best alternative available if negotiation does not produce an agreement."
  },
  {
    "q": "Which is a key difference between quality assurance and quality control?",
    "options": [
      "QA checks outputs; QC checks processes",
      "QA provides confidence in processes; QC checks outputs",
      "They are identical",
      "QA only applies after closure"
    ],
    "answer": 1,
    "explain": "Assurance is about confidence in appropriate processes/controls; control checks outputs against requirements."
  },
  {
    "q": "What does RACI stand for?",
    "options": [
      "Risk, Assurance, Control, Issue",
      "Responsible, Accountable, Consulted, Informed",
      "Review, Approve, Change, Implement",
      "Resource, Authority, Cost, Impact"
    ],
    "answer": 1,
    "explain": "RACI clarifies responsibility and involvement."
  },
  {
    "q": "What is the critical path?",
    "options": [
      "The cheapest work package",
      "The dependency-driven sequence determining project duration",
      "The list of risks",
      "The resource register"
    ],
    "answer": 1,
    "explain": "The critical path is the sequence of activities that determines the shortest project duration in the schedule model."
  },
  {
    "q": "Which response is a threat response?",
    "options": [
      "Exploit",
      "Enhance",
      "Transfer",
      "Share"
    ],
    "answer": 2,
    "explain": "Transfer is a response to a threat; exploit, enhance and share are opportunity responses."
  },
  {
    "q": "What should happen before an approved baseline change is implemented?",
    "options": [
      "Nothing; just tell the developer",
      "Assess impacts and obtain the appropriate approval",
      "Delete the baseline",
      "Close the project"
    ],
    "answer": 1,
    "explain": "Change should be assessed for impact and approved by the appropriate authority before implementation."
  },
  {
    "q": "What is the difference between an output and an outcome?",
    "options": [
      "They are identical",
      "Output is what is delivered; outcome is the change resulting from its use",
      "Outcome is always a document",
      "Output is always a benefit"
    ],
    "answer": 1,
    "explain": "An output is a deliverable; an outcome is the change achieved through using it."
  },
  {
    "q": "What is the purpose of a business case?",
    "options": [
      "To explain why the investment is justified",
      "To replace the project schedule",
      "To record every meeting",
      "To allocate every task"
    ],
    "answer": 0,
    "explain": "The business case justifies investment using benefits, costs, risks and strategic alignment."
  },
  {
    "q": "What is resource smoothing intended to do?",
    "options": [
      "Increase every resource",
      "Adjust resource use within available flexibility where possible",
      "Delete the schedule",
      "Approve scope changes"
    ],
    "answer": 1,
    "explain": "Smoothing seeks to resolve resource peaks within available float/flexibility where possible."
  },
  {
    "q": "Which statement best describes transition management?",
    "options": [
      "Writing the business case",
      "Moving project outputs into operational use and supporting adoption",
      "Creating a risk register only",
      "Selecting the project sponsor"
    ],
    "answer": 1,
    "explain": "Transition connects delivery with operational use, ownership, readiness and adoption."
  },
  {
    "q": "What is the purpose of a communication plan?",
    "options": [
      "To specify what, who, when, why and how information is communicated",
      "To eliminate stakeholder engagement",
      "To replace governance",
      "To calculate NPV"
    ],
    "answer": 0,
    "explain": "It structures communication so the right stakeholders receive useful information through suitable channels."
  },
  {
    "q": "Which is a governance responsibility rather than simply a delivery task?",
    "options": [
      "Providing oversight and decision authority",
      "Writing every test script",
      "Performing every task",
      "Answering every email"
    ],
    "answer": 0,
    "explain": "Governance provides direction, oversight, control and accountability."
  },
  {
    "q": "Why should the business case be revisited during the project?",
    "options": [
      "It never changes",
      "Major changes may affect costs, risks, benefits or strategic justification",
      "Only because the document needs a new date",
      "To replace the project plan"
    ],
    "answer": 1,
    "explain": "The justification should remain valid as circumstances change."
  },
  {
    "q": "Which best describes configuration management?",
    "options": [
      "Controlling the identity, version and status of controlled items",
      "Choosing the sponsor",
      "Motivating the team",
      "Estimating tax"
    ],
    "answer": 0,
    "explain": "Configuration management maintains integrity and traceability of controlled items and their changes."
  },
  {
    "q": "What is the best reason to involve diverse perspectives?",
    "options": [
      "To make meetings longer",
      "To improve challenge, inclusion and potential for better/innovative decisions",
      "To avoid accountability",
      "To remove requirements"
    ],
    "answer": 1,
    "explain": "Diverse perspectives can challenge assumptions and contribute to stronger solutions while inclusion enables participation."
  }
];

const sectionTests = {
  "Setting up for success": [
    {type:"multi", marks:1, q:"A project has a defined objective, but its team will work continuously after the project ends. Which statements best distinguish the project from BAU?", options:["The project is temporary and focused on achieving defined objectives.","BAU is continuous and process-oriented.","The project must eliminate every risk before starting.","BAU exists only to produce one-off outputs."], answers:[0,1], explain:"A project is unique/transient and objective-focused, whereas BAU is repetitive/continuous and focused on ongoing operations. The other statements confuse project and BAU characteristics."},
    {type:"multi", marks:1, q:"A sponsor asks why governance is necessary when the project manager is already experienced. Which are valid reasons?", options:["It establishes decision rights and accountability.","It provides oversight and direction appropriate to the project.","It means the sponsor must personally perform every project task.","It removes the need for the PM to manage delivery."], answers:[0,1], explain:"Governance provides direction, oversight, accountability and decision rights. It does not replace project management or mean senior people perform delivery tasks."},
    {type:"select", marks:2, q:"A project reaches a point where the expected benefits are still achievable, but only if additional funding is approved outside the PM's delegated authority. The PM should ______ the matter through the agreed governance route.", options:["escalate","baseline","iterate","archive"], answer:0, explain:"The key clue is that the required decision exceeds delegated authority. The PM should escalate through the agreed governance route rather than quietly committing beyond their authority."},
    {type:"select", marks:2, q:"A project delivers a working product, but users have not adopted it and the intended improvement has not yet occurred. The product is an ______; the realised improvement is a ______.", options:["outcome; output","output; benefit","benefit; output","risk; issue"], answer:1, explain:"The product delivered by the project is an output. The measurable improvement/value perceived positively by stakeholders is the benefit; adoption and an outcome sit between delivery and realised benefit."},
    {type:"short", marks:2, q:"Differentiate between a project life cycle and an extended life cycle. Give one reason the distinction matters to a project manager.", model:"A project life cycle describes how the project progresses through its delivery phases. An extended life cycle considers the wider period beyond delivery, including transition/adoption and benefits realisation. The distinction matters because delivering an output does not by itself demonstrate that the intended outcomes and benefits have been achieved.", checklist:["Defines/distinguishes the project life cycle from the extended life cycle.","Identifies transition/adoption and/or benefits realisation as part of the wider period.","Explains why delivery alone is not the same as realised value."], area:"Setting up for success"},
    {type:"short", marks:2, q:"Explain why a business case should not be treated as a document that is relevant only at project initiation.", model:"The business case sets out why the investment is justified. As assumptions, costs, risks, schedule or expected benefits change, the justification may strengthen or weaken. Reviewing it helps governance determine whether the project remains viable and aligned with organisational objectives.", checklist:["Explains that the business case establishes the justification for investment.","Links changing assumptions/costs/risks/benefits to continuing justification.","Explains that review supports a decision about continued viability/alignment."], area:"Setting up for success"},
    {type:"long", marks:5, q:"A digital service project has uncertain user requirements, a fixed regulatory deadline and a governance board that requires formal approval at major points. Explain how the project manager could select and structure an appropriate life cycle, and why.", model:"The PM should select an approach that reflects both uncertainty and the fixed external constraints. An iterative element would allow the team to develop and refine the service through user feedback, while defined phases or governance gates can provide formal decision points against the regulatory deadline. A hybrid approach may therefore be appropriate if different parts of the project have different needs. The PM should explain how reviews, decision rights and timing will be managed so that iteration does not undermine required governance or the deadline.", checklist:["Recognises uncertainty/user feedback as a reason for an iterative element.","Recognises the fixed regulatory deadline and governance requirements.","Explains why a hybrid or appropriately structured approach can reconcile the two needs.","Links phases/reviews/gates to governance and decision-making.","Explains the choice in relation to the actual scenario rather than simply naming a life cycle."], area:"Setting up for success"},
    {type:"long", marks:5, q:"Explain how governance, the business case and assurance can work together to support project success. Use a project example in your explanation.", model:"The business case explains why the project is justified and what value is expected. Governance establishes who has authority to make decisions, how the project is directed and how accountability is maintained. Assurance provides objective confidence that governance, controls and delivery arrangements are working and that the project remains capable of achieving its objectives. For example, if assurance identifies weak cost control, governance can require corrective action while the business case is reviewed to determine whether the investment remains justified.", checklist:["Explains the purpose of the business case.","Explains governance in terms of direction, authority, oversight and accountability.","Explains the confidence/independence role of assurance.","Connects the three concepts rather than describing them as unrelated definitions.","Uses a relevant example showing how evidence can lead to a management/governance decision."], area:"Setting up for success"}
  ],
  "Preparing for change": [
    {type:"multi", marks:1, q:"A project is preparing to move a new system into operational use. Which activities support effective transition?", options:["Confirm operational ownership and readiness.","Plan training, support and knowledge transfer.","Assume benefits will occur automatically once the system is technically complete.","Define acceptance/readiness criteria before handover."], answers:[0,1,3], explain:"Transition requires operational readiness, ownership, training/support, knowledge transfer and acceptance. Technical completion alone does not guarantee adoption or benefits."},
    {type:"multi", marks:1, q:"Which statements correctly distinguish assurance from quality control?", options:["Assurance provides confidence that appropriate processes and controls are being applied.","Quality control checks outputs against defined requirements or criteria.","Assurance is simply the PM checking their own work.","Quality control replaces the need for governance."], answers:[0,1], explain:"Assurance gives confidence about governance/process/control effectiveness; quality control checks outputs against requirements. Neither removes the need for appropriate governance."},
    {type:"select", marks:2, q:"A review finds that the expected benefits have weakened, although the planned output is still technically achievable. The most appropriate next step is to reassess the project's ______.", options:["viability and justification","font formatting","team hierarchy","document naming"], answer:0, explain:"The change in expected benefits may affect whether the investment remains justified. A review should therefore reassess viability and the available options."},
    {type:"select", marks:2, q:"When selecting a procurement approach for a specialist supplier, the PM should consider price alongside quality, timing, supplier capability and ______.", options:["supply-chain risk","meeting frequency only","personal preference","the number of project emails"], answer:0, explain:"Procurement strategy should reflect the wider delivery and risk context, including supply-chain risk."},
    {type:"short", marks:2, q:"Explain why transition management should be planned before the end of the project rather than treated as a final handover task.", model:"Transition moves project outputs into operational use. Planning it early allows the team to identify the receiving owner, readiness requirements, training, support, documentation, acceptance and other dependencies before delivery is complete. This reduces the risk of a technically complete product failing to be adopted or supported.", checklist:["Defines transition as movement into operational use/adoption.","Explains why early planning identifies readiness/ownership/support needs.","Links early transition planning to successful adoption and/or benefits."], area:"Preparing for change"},
    {type:"short", marks:2, q:"Differentiate between a review and assurance. Why might a project need both?", model:"A review is a structured assessment of progress, status, viability, decisions or learning at an appropriate point. Assurance provides objective confidence to governance that the project is appropriately governed and controlled and remains capable of achieving its objectives. A project may need both because reviews support management decisions while assurance provides independent challenge/confidence to governance.", checklist:["Defines a review as a structured assessment of project status/progress/viability or learning.","Defines assurance as objective/independent confidence to governance.","Explains why their purposes can complement each other."], area:"Preparing for change"},
    {type:"long", marks:5, q:"A project has delivered its planned output on time and within budget. However, users have not adopted it and the expected efficiency improvement is not being seen. Explain what this tells the project manager and what should happen next.", model:"The project has delivered an output, but delivery does not prove that the intended outcome or benefit has been achieved. The PM should investigate the causes of poor adoption and review transition, training, support, ownership, requirements and benefit assumptions. Appropriate stakeholders should be involved and actions agreed. Benefits should continue to be tracked, and the project/governance team should determine whether corrective action, further transition activity or changes to the approach are justified.", checklist:["Distinguishes output from outcome/benefit.","Recognises adoption as necessary for intended value.","Identifies investigation of causes and relevant transition/adoption factors.","Includes stakeholder involvement and corrective action.","Explains the need to continue measuring/reviewing benefits rather than declaring success at delivery."], area:"Preparing for change"},
    {type:"long", marks:5, q:"Explain how assurance can add value when the project manager believes the project is on track but governance wants additional confidence.", model:"Assurance provides objective challenge and confidence beyond the project team's own reporting. An assurance review can examine governance, risk, controls, plans, progress, quality and compliance and identify weaknesses that internal reporting may miss. Findings give governance evidence on which to require corrective action, accept a risk, escalate an issue or continue with greater confidence. Assurance should be proportionate and sufficiently independent for the purpose.", checklist:["Explains the independent/objective confidence role of assurance.","Identifies areas that assurance may examine such as governance, risk or controls.","Explains how findings support governance decisions.","Recognises that assurance is not simply the PM checking their own work.","Explains why proportionate assurance adds value rather than just creating bureaucracy."], area:"Preparing for change"}
  ],
  "People and behaviours": [
    {type:"multi", marks:1, q:"A project has stakeholders with very different levels of influence, interest and impact. Which approaches are appropriate?", options:["Tailor engagement to stakeholder needs and influence.","Use the same communication for everyone to guarantee fairness.","Identify what information and involvement each stakeholder requires.","Ignore low-interest stakeholders regardless of their potential impact."], answers:[0,2], explain:"Stakeholder engagement should be tailored. Influence, interest and impact affect the appropriate level and method of communication and involvement."},
    {type:"multi", marks:1, q:"A conflict develops between two technical leads. Which actions are consistent with constructive conflict resolution?", options:["Explore the underlying interests and causes.","Focus on evidence and the desired project outcome.","Automatically side with the more senior person.","Suppress the disagreement without understanding it."], answers:[0,1], explain:"Constructive conflict resolution seeks to understand causes/interests and reach an outcome that supports the project. Seniority alone does not resolve the underlying problem."},
    {type:"select", marks:2, q:"A highly capable team is becoming frustrated by detailed instructions from the PM. The PM should consider adapting their leadership style and providing greater ______ where appropriate.", options:["autonomy","confusion","scope creep","bureaucracy"], answer:0, explain:"Leadership should be adapted to team capability and context. Appropriate autonomy can improve ownership and performance while objectives and accountability remain clear."},
    {type:"select", marks:2, q:"Diversity concerns the differences represented in a team; inclusion concerns whether people can ______ and participate meaningfully.", options:["contribute fairly","avoid all challenge","receive identical roles","remove accountability"], answer:0, explain:"Inclusion is about creating conditions for people to participate and contribute fairly, not about eliminating challenge or making every role identical."},
    {type:"short", marks:2, q:"Explain why stakeholder engagement is more than simply sending stakeholders project updates.", model:"Engagement involves understanding stakeholders' interests, influence, needs and potential impact, then choosing appropriate ways to communicate with and involve them. It should support decisions, expectations, relationships and project objectives rather than simply distributing information.", checklist:["Distinguishes engagement from one-way information distribution.","Mentions stakeholder interests/influence/needs/impact.","Explains how engagement supports project objectives, decisions or relationships."], area:"People and behaviours"},
    {type:"short", marks:2, q:"Differentiate between diversity and inclusion and explain why a project manager should care about both.", model:"Diversity concerns the range of differences represented among people, while inclusion concerns whether people are able and enabled to participate and contribute fairly. A PM should consider both because having diverse perspectives does not automatically mean those perspectives are heard, respected or used in decision making.", checklist:["Correctly distinguishes diversity from inclusion.","Explains that representation alone does not guarantee participation.","Links the distinction to project teamwork/decision making."], area:"People and behaviours"},
    {type:"long", marks:5, q:"A project team contains highly experienced specialists, several new members and one stakeholder group that feels its concerns are repeatedly ignored. Explain how the PM could use leadership, team management and stakeholder engagement to improve the situation.", model:"The PM should first understand the different needs and capabilities within the team and adapt leadership accordingly. Experienced specialists may benefit from autonomy and clear outcomes, while newer members may need coaching, support and clarity. Team management should establish roles, communication, collaboration and development. The stakeholder group's concerns should be understood rather than dismissed; the PM should identify its interests, influence and information needs and use an appropriate engagement approach. The PM should create an environment where challenge is constructive and people can contribute meaningfully.", checklist:["Adapts leadership to different capability/needs.","Uses team management to establish roles, communication or development.","Identifies the stakeholder group's interests/concerns rather than simply sending updates.","Explains how engagement can rebuild trust and improve project decisions.","Connects the actions to project performance/team effectiveness rather than listing techniques."], area:"People and behaviours"},
    {type:"long", marks:5, q:"Explain how a project manager should respond when commercial or schedule pressure encourages the team to bypass an organisational control.", model:"The PM should understand the reason for the control and determine whether it is mandatory through law, regulation, policy, governance or agreed project arrangements. Schedule or cost pressure does not automatically justify bypassing a control. The PM should assess the consequences and risks, seek the appropriate decision or exception through governance where one is permitted, and document the decision. Ethical, professional and compliance responsibilities must remain part of the decision.", checklist:["Identifies the need to establish what the control requires and why.","Recognises legal/regulatory/organisational/professional obligations where relevant.","Explains that pressure does not automatically justify bypassing controls.","Includes appropriate escalation/exception decision-making and documentation.","Links the response to risk, ethics, compliance or project governance."], area:"People and behaviours"}
  ],
  "Planning & managing deployment": [
    {type:"multi", marks:1, q:"A stakeholder proposes a change after the scope baseline has been agreed. Which actions are appropriate before implementation?", options:["Assess the impact on scope, time, cost, risk and other relevant areas.","Use the agreed change-control process and authority.","Implement immediately because the stakeholder requested it.","Change the baseline secretly to keep the plan looking stable."], answers:[0,1], explain:"Changes should be assessed for impact and approved by the appropriate authority through change control before implementation."},
    {type:"multi", marks:1, q:"Which statements about schedule and resource management are correct?", options:["Dependencies affect the sequence in which activities can occur.","Resource smoothing aims to work within available float where possible.","Resource levelling can resolve over-allocation but may affect dates.","A Gantt chart always makes every dependency obvious without any other schedule information."], answers:[0,1,2], explain:"Dependencies affect sequencing. Smoothing uses available float where possible without changing the project end date, while levelling resolves resource over-allocation and may change dates. A Gantt chart does not necessarily show all dependencies clearly."},
    {type:"select", marks:2, q:"A supplier informs the PM that a delivery that was uncertain yesterday will definitely be two weeks late. The situation has moved from a ______ to an ______.", options:["risk; issue","issue; risk","benefit; output","baseline; tolerance"], answer:0, explain:"Before the delay materialised, it was an uncertainty/risk. Once it has happened and requires management action, it is an issue."},
    {type:"select", marks:2, q:"A project has an activity that can move by three days without affecting the defined project completion date, provided its dependencies remain satisfied. The three days represent available ______.", options:["float","scope","tolerance","assurance"], answer:0, explain:"Float is the amount of time an activity can move without causing the defined schedule consequence. The exact type of float depends on the schedule relationship being considered."},
    {type:"short", marks:2, q:"Differentiate between resource smoothing and resource levelling. Explain the main consequence that distinguishes them.", model:"Resource smoothing adjusts the timing of work within available float where possible, with the aim of resolving resource conflicts without changing the project end date. Resource levelling adjusts activity timing to resolve resource over-allocation and can change project dates. The key distinction is whether the adjustment is constrained by available float and whether the completion date may move.", checklist:["Defines resource smoothing in relation to available float.","Defines resource levelling in relation to resolving over-allocation.","Explains the potential effect on the project end date."], area:"Planning & managing deployment"},
    {type:"short", marks:2, q:"Explain why quality assurance and quality control should not be treated as interchangeable terms.", model:"Quality assurance provides confidence that appropriate quality processes and controls are being applied, while quality control checks outputs or products against defined requirements and criteria. They therefore address different aspects of managing quality and can complement each other.", checklist:["Defines assurance as confidence in the process/control approach.","Defines control as checking outputs against requirements/criteria.","Explains that they have different but complementary purposes."], area:"Planning & managing deployment"},
    {type:"long", marks:5, q:"A project is three weeks behind schedule. The PM can recover two weeks by using additional resources, but this increases cost and introduces a new delivery risk. Explain how the PM should approach the decision.", model:"The PM should not choose the cheapest or fastest option in isolation. They should assess the impact of the recovery options on schedule, cost, resources, quality, risk, scope and benefits, and compare them with the project's tolerances and objectives. The additional risk should be identified and assessed, and the cost/risk trade-off should be presented to the appropriate decision maker if it exceeds delegated authority. The selected response should be documented and the integrated plan updated.", checklist:["Considers more than schedule alone.","Assesses cost, resources, quality, risk, scope and/or benefits as relevant.","Identifies and assesses the new delivery risk.","Checks tolerances/delegated authority and escalates where necessary.","Explains the need to update the plan and manage the chosen response."], area:"Planning & managing deployment"},
    {type:"long", marks:5, q:"A project has a stable approved scope, but a new stakeholder requirement would materially change the solution and increase cost. Explain how the PM should manage the proposed change from identification through decision.", model:"The PM should capture the proposed change and assess its impact on requirements, scope, solution, schedule, cost, resources, quality, risk and benefits. The relevant stakeholders should be engaged so that the need and consequences are understood. The request should then follow the agreed change-control process and be considered by the appropriate authority. If approved, the relevant baselines and plans should be updated under configuration/change control and the change communicated. If rejected, the decision and rationale should be recorded and the original approved baseline maintained.", checklist:["Captures and clarifies the proposed change.","Assesses impacts across relevant project areas.","Engages appropriate stakeholders.","Uses the agreed change-control authority/process.","Explains what happens to baselines, plans and communications after the decision."], area:"Planning & managing deployment"}
  ]
};

const definitionCards = [['Project life cycle', 'The sequence of phases and activities through which a project progresses from start through delivery and closure.'], ['Linear life cycle', 'A life cycle in which work progresses through defined phases with relatively stable scope and planned sequencing.'], ['Iterative life cycle', 'A life cycle in which the solution is developed in repeated cycles using feedback to refine what is delivered.'], ['Hybrid life cycle', 'A life cycle combining linear and iterative approaches where different parts of a project need different delivery methods.'], ['Project sponsor', "The senior role providing ownership, direction and support for the project's business need and governance."], ['Project manager', 'The person responsible for managing and coordinating project delivery within agreed authority, controls and objectives.'], ['PMO', 'A project, programme or portfolio support function that can provide standards, methods, reporting, assurance support and coordination.'], ['Sustainability', 'Considering environmental, social and economic impacts and whole-life value when making project decisions.'], ['Procurement strategy', 'The approach for obtaining required goods or services in a way that supports project objectives, value, quality and risk control.'], ['Review', 'A structured assessment of project progress, status, viability, decisions, risks or learning at an appropriate point.'], ['Benefits management', 'The process of identifying, planning, measuring, tracking and realising the benefits expected from project outputs and outcomes.'], ['Stakeholder engagement', 'The deliberate process of understanding, involving and communicating with stakeholders to support project objectives.'], ['Conflict resolution', 'The process of addressing disagreement constructively and reaching an acceptable way forward.'], ['Leadership', 'The ability to provide direction, influence behaviour and create the conditions for people to work towards project objectives.'], ['Team management', 'Organising, supporting and developing people so the project team can perform effectively.'], ['Diversity and inclusion', 'Creating conditions in which differences are respected and people can contribute and participate fairly.'], ['Ethics', 'Principles of right conduct that guide professional decisions and behaviour.'], ['Compliance', 'Meeting applicable laws, regulations, policies, standards and agreed requirements.'], ['Professionalism', 'Applying appropriate competence, behaviour, judgement and standards in project work.'], ['Requirements management', 'Identifying, documenting, analysing, prioritising, validating and controlling what the project or solution needs to satisfy.'], ['Solution development', 'Developing and refining a solution that satisfies agreed requirements and enables the intended outcomes.'], ['Quality management', 'The coordinated activities used to direct and control quality, including planning, assurance and control.'], ['Integrated planning', 'Coordinating scope, schedule, resources, cost, risk and other plans so they work together as one delivery approach.'], ['Schedule management', 'Planning, developing, maintaining and controlling the timing and sequence of project work.'], ['Resource management', 'Planning and controlling the people, equipment, materials and other resources needed to deliver the project.'], ['Budget', 'An authorised financial plan for expected project expenditure and/or income.'], ['Cost control', 'Monitoring and controlling project costs against the agreed budget or cost baseline.'], ['Risk management', 'The systematic process of identifying, assessing, responding to and monitoring uncertainty that could affect objectives.'], ['Risk response', 'An agreed action or strategy for dealing with a project risk, such as avoiding, reducing, transferring or accepting it.'], ['Issue management', 'The process of recording, assessing, responding to, escalating and closing issues that require management action.'], ['Change', 'A modification to an approved project baseline, requirement, product, plan or other controlled element.'], ['Change request', 'A formal request to modify an agreed project baseline or controlled element.'], ['Configuration item', 'A controlled product, document or component whose identity, version and status need to be managed.'], ['Quality plan', 'A plan describing the quality requirements, standards, responsibilities, methods and controls for the project.'], ['Acceptance criteria', 'Defined conditions that a deliverable or output must satisfy to be accepted.'], ['Dependency', 'A relationship in which one activity, deliverable or decision relies on another.'], ['Float', 'The amount of time an activity can move without causing a defined schedule consequence.'], ['Critical path', 'The sequence of dependent activities that determines the shortest possible project duration under the schedule model.'], ['Critical chain', 'A resource-constrained scheduling approach that considers dependencies, resource availability and buffers.'], ['Resource smoothing', 'Adjusting resource timing within available float where possible without changing the project end date.'], ['Resource levelling', 'Adjusting activity timing to resolve resource over-allocation, potentially changing project dates.'], ['Baseline', 'An agreed reference point used to control and assess changes to project scope, schedule, cost or other controlled information.'], ['Tolerance', 'The permitted variation from an agreed target or baseline before escalation or further approval is required.'], ['Lessons learned', 'Knowledge captured from experience that can be used to improve current or future project performance.']];

const progressKey = "pmqProgress";
const sectionScoreKey = "pmqSectionScores";
const searchInput = document.getElementById("search");
const topicContainer = document.getElementById("topicContainer");
const quizArea = document.getElementById("quizArea");
const quizState = {questions:[], index:0, score:0, answered:false};
const sectionState = {questions:[], index:0, score:0, answered:false, area:""};

function getProgress(){ try { return JSON.parse(localStorage.getItem(progressKey)) || {}; } catch(e){ return {}; } }
function saveProgress(p){ localStorage.setItem(progressKey, JSON.stringify(p)); }
function esc(text){ return String(text).replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':'&quot;'}[c])); }

const weakKey = "pmqWeakAttempts";
function weekKey(date=new Date()){
  const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
  const day=d.getUTCDay()||7; d.setUTCDate(d.getUTCDate()+4-day);
  const yearStart=new Date(Date.UTC(d.getUTCFullYear(),0,1));
  const week=Math.ceil((((d-yearStart)/86400000)+1)/7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2,'0')}`;
}
function getWeak(){try{return JSON.parse(localStorage.getItem(weakKey))||[];}catch(e){return[];}}
function saveWeak(list){localStorage.setItem(weakKey,JSON.stringify(list));}
function recordWeak(source,label,area,correct,details=""){
  const list=getWeak();
  list.push({id:Date.now()+Math.random(),week:weekKey(),source,label,area,correct,details,date:new Date().toISOString()});
  saveWeak(list);
  renderWeakAreas();
  updateStats();
}
function renderWeakAreas(){
  const box=document.getElementById('weakAreaList'); if(!box)return;
  const current=weekKey();
  const list=getWeak().filter(x=>x.week===current && !x.correct);
  if(!list.length){box.innerHTML='<div class="weak-empty"><strong>Nothing flagged this week yet.</strong><p>Keep testing yourself. Anything you mark wrong or "Need to revise" will appear here.</p></div>';return;}
  const grouped={};
  list.forEach(x=>{const key=x.label; if(!grouped[key])grouped[key]={...x,count:0,sources:new Set()};grouped[key].count++;grouped[key].sources.add(x.source);});
  box.innerHTML=Object.values(grouped).sort((a,b)=>b.count-a.count).map(x=>`<article class="weak-item"><div class="weak-summary"><div><span class="weak-source">${esc([...x.sources].join(' • '))}</span><h3>${esc(x.label)} <span class="weak-count">${x.count} miss${x.count===1?'':'es'}</span></h3><p class="weak-meta">${esc(x.area||'')}${x.details?' • '+esc(x.details):''}</p></div></div></article>`).join('');
}
function clearWeakWeek(){const current=weekKey();saveWeak(getWeak().filter(x=>x.week!==current));renderWeakAreas();updateStats();}
function weakCount(){return getWeak().filter(x=>x.week===weekKey()&&!x.correct).length;}

function renderTopics(filter=""){
  const term = filter.trim().toLowerCase();
  const progress = getProgress();
  topicContainer.innerHTML = "";
  const grouped = {};
  topics.forEach(t => (grouped[t.area] ||= []).push(t));

  Object.entries(grouped).forEach(([area, list]) => {
    const areaDiv = document.createElement("div");
    areaDiv.className = "topic-area";
    const matching = list.filter(t => !term || JSON.stringify(t).toLowerCase().includes(term));
    if (!matching.length) return;
    areaDiv.innerHTML = `<div class="area-heading"><h3>${esc(area)}</h3><span>${matching.length} topic${matching.length===1?'':'s'}</span></div>`;

    matching.forEach(topic => {
      const details = document.createElement("details");
      details.className = "topic-card";
      details.innerHTML = `<summary>${esc(topic.title)} <span class="status">${progress[topic.id] ? "✓" : ""}</span></summary>`;
      const body = document.createElement("div"); body.className="topic-body";
      body.innerHTML = `<p class="topic-summary">${esc(topic.summary)}</p>`;
      body.innerHTML += `<div class="revision-grid"><div><h4>🧠 KNOW</h4><ul>${topic.know.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div><h4>🔍 UNDERSTAND / APPLY</h4><ul>${topic.apply.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></div>`;
      body.innerHTML += `<div class="distinctions"><h4>⚖️ KEY DISTINCTIONS</h4><ul>${topic.distinctions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`;
      const scenario=document.createElement("div"); scenario.className="scenario";
      if(topic.applyScenarios){
        scenario.innerHTML=`<h4>🎯 APPLY — Six life-cycle scenarios</h4><p class="hint">For each scenario, identify the most suitable model <strong>before</strong> revealing the answer. Then explain why the model fits the uncertainty, requirements, feedback, delivery pattern and project context.</p>`;
        const grid=document.createElement("div"); grid.className="scenario-grid";
        topic.applyScenarios.forEach(item=>{
          const card=document.createElement("details"); card.className="life-cycle-scenario";
          card.innerHTML=`<summary>${esc(item.model)}</summary><div class="scenario-question"><strong>Scenario</strong><p>${esc(item.scenario)}</p></div><div class="reveal-answer"><strong>Model answer</strong><p>${esc(item.answer)}</p></div>`;
          grid.appendChild(card);
        });
        scenario.appendChild(grid);
      } else {
        scenario.innerHTML=`<h4>🎯 APPLY — Scenario</h4><p class="scenario-question"><strong>Question</strong><br>${esc(topic.scenario)}</p>`;
        const reveal=document.createElement("details"); reveal.className="reveal"; reveal.innerHTML=`<summary>Reveal model answer</summary><div class="reveal-answer"><strong>Model answer</strong><p>${esc(topic.applyAnswer || topic.apply[0])}</p><p class="self-check"><strong>Self-check:</strong> Did your answer identify the concept, explain the reasoning and apply it directly to the scenario?</p></div>`;
        scenario.appendChild(reveal);
        if(topic.extraScenarios){
          const extraTitle=document.createElement("h4"); extraTitle.className="extra-scenario-title"; extraTitle.textContent="🎯 More application practice"; scenario.appendChild(extraTitle);
          const extraGrid=document.createElement("div"); extraGrid.className="scenario-grid";
          topic.extraScenarios.forEach(item=>{
            const card=document.createElement("details"); card.className="life-cycle-scenario";
            card.innerHTML=`<summary>${esc(item.label)}</summary><div class="scenario-question"><strong>Scenario</strong><p>${esc(item.scenario)}</p></div><div class="reveal-answer"><strong>Model answer</strong><p>${esc(item.answer)}</p></div>`;
            extraGrid.appendChild(card);
          });
          scenario.appendChild(extraGrid);
        }
      }
      body.appendChild(scenario);
      body.innerHTML += `<div class="explain-box"><h4>🗣️ EXPLAIN</h4><p>Close this card and explain the topic aloud in your own words. If you cannot, it is not understood yet.</p></div>`;
      const life = (window.pmqLifeTranslations || []).find(x => x.id === topic.id);
      if (life) {
        const lifeWrap = document.createElement("div");
        lifeWrap.className = "life-translation-wrap";

        const lifeBtn = document.createElement("button");
        lifeBtn.className = "life-translation-btn";
        lifeBtn.type = "button";
        lifeBtn.innerHTML = "🧠 Translate to my life";
        lifeWrap.appendChild(lifeBtn);

        const panel = document.createElement("div");
        panel.className = "life-translation-panel";
        panel.hidden = true;
        panel.innerHTML = `
          <div class="life-translation-head">
            <div>
              <p class="eyebrow">MEMORY HOOK — NOT THE PMQ DEFINITION</p>
              <h4>${esc(life.label || "A real-life example")}</h4>
            </div>
            <button type="button" class="life-close">Close</button>
          </div>
          <p><strong>The PMQ idea:</strong> ${esc(life.definition || "")}</p>
          <div class="life-example">
            <strong>💡 Think of your own life:</strong>
            <p>${esc(life.anchor || "")}</p>
          </div>
          <div class="life-bridge">
            <strong>🔄 Now translate that experience into PMQ language:</strong>
            <p>${esc(life.model || "")}</p>
          </div>
          <p><strong>🔑 Keywords to recognise:</strong>
            ${(life.keywords || []).map(k => `<span class="life-keyword">${esc(k)}</span>`).join(" ")}
          </p>
          <div class="life-exam">
            <strong>🎯 Exam bridge:</strong>
            <p>${esc(life.exam || "")}</p>
          </div>
        `;
        lifeBtn.addEventListener("click", () => {
          panel.hidden = !panel.hidden;
          lifeBtn.textContent = panel.hidden ? "🧠 Translate to my life" : "🧠 Hide my-life example";
        });
        panel.querySelector(".life-close").addEventListener("click", () => {
          panel.hidden = true;
          lifeBtn.textContent = "🧠 Translate to my life";
        });

        lifeWrap.appendChild(panel);
        body.appendChild(lifeWrap);
      }

      const actions=document.createElement("div"); actions.className="topic-actions";
      const b=document.createElement("button"); b.className=progress[topic.id]?"secondary understood":"primary"; b.textContent=progress[topic.id]?"✓ Understood — click to reset":"Mark understood";
      b.onclick=()=>{ const p=getProgress(); p[topic.id]=!p[topic.id]; saveProgress(p); renderTopics(searchInput.value); updateStats(); };
      actions.appendChild(b); body.appendChild(actions); details.appendChild(body); areaDiv.appendChild(details);
    });

    const test = document.createElement("div"); test.className="section-test";
    test.innerHTML=`<div><p class="eyebrow">END-OF-SECTION CHECK</p><h4>Exam-style test: ${esc(area)}</h4><p>8 questions • 18 marks • mixed formats • close distractors. Don't look anything up.</p></div><button class="primary section-test-btn">Start exam-style test</button>`;
    test.querySelector("button").onclick=()=>startSectionTest(area);
    areaDiv.appendChild(test); topicContainer.appendChild(areaDiv);
  });
  if(!topicContainer.children.length) topicContainer.innerHTML='<div class="empty">No topics matched your search.</div>';
}

function updateStats(){
  const p=getProgress();
  document.getElementById("topicCount").textContent=topics.length;
  document.getElementById("understoodCount").textContent=Object.values(p).filter(Boolean).length;
  document.getElementById("quizScore").textContent=localStorage.getItem("pmqLastScore") ? `${localStorage.getItem("pmqLastScore")}%` : "—";
  document.getElementById("quizBest").textContent=localStorage.getItem("pmqBestScore") ? `${localStorage.getItem("pmqBestScore")}%` : "—";
  const wc=document.getElementById("weakCount"); if(wc) wc.textContent=weakCount();
}

function shuffle(a){ return [...a].sort(()=>Math.random()-0.5); }
function startSectionTest(area){
  sectionState.area=area; sectionState.questions=shuffle(sectionTests[area]); sectionState.index=0; sectionState.score=0; sectionState.maxMarks=sectionState.questions.reduce((n,q)=>n+(q.marks||1),0); sectionState.answered=false;
  const quiz=document.getElementById("sectionTestArea"); quiz.classList.add("active"); quiz.scrollIntoView({behavior:"smooth",block:"start"}); showSectionQuestion();
}
function showSectionQuestion(){
  const q=sectionState.questions[sectionState.index]; const box=document.getElementById("sectionTestArea");
  const typeLabel={multi:"Multiple response • 1 mark",select:"Select from list • 2 marks",short:"Short response • 2 marks",long:"Long response • 5 marks"}[q.type] || "Exam-style question";
  box.innerHTML=`<div class="test-header"><span>Exam-style section test</span><strong>${esc(sectionState.area)}</strong><small>Question ${sectionState.index+1} of ${sectionState.questions.length} • ${typeLabel}</small></div><h3>${esc(q.q)}</h3><div id="sectionOptions" class="options"></div>`;
  const options=document.getElementById('sectionOptions');
  if(q.type==='multi'){
    options.innerHTML='<p class="hint">Select <strong>all</strong> answers you believe are correct. Some distractors differ by only one idea.</p>'+q.options.map((o,i)=>`<label class="check-option"><input type="checkbox" value="${i}"> ${esc(o)}</label>`).join('')+'<button class="primary section-submit">Submit answer</button>';
    options.querySelector('.section-submit').onclick=()=>answerSection();
  } else if(q.type==='select'){
    options.innerHTML=`<label class="select-line">Select the best completion: <select id="sectionSelect">${q.options.map((o,i)=>`<option value="${i}">${esc(o)}</option>`).join('')}</select></label><button class="primary section-submit">Submit answer</button>`;
    options.querySelector('.section-submit').onclick=()=>answerSection();
  } else {
    options.innerHTML=`<p class="hint">Write your answer before revealing the model. For a ${q.marks}-mark question, practise being concise but complete.</p><textarea id="sectionText" rows="${q.type==='long'?9:6}" placeholder="Write your answer here..."></textarea><button class="primary section-submit">Reveal model answer & self-mark</button>`;
    options.querySelector('.section-submit').onclick=()=>answerSection();
  }
}
function answerSection(){
  if(sectionState.answered)return; sectionState.answered=true; const q=sectionState.questions[sectionState.index]; const box=document.getElementById("sectionTestArea");
  if(q.type==='multi' || q.type==='select'){
    let correct=false;
    if(q.type==='multi'){
      const selected=[...document.querySelectorAll('#sectionOptions input:checked')].map(x=>Number(x.value));
      correct=selected.length===q.answers.length && selected.every(x=>q.answers.includes(x));
      document.querySelectorAll('#sectionOptions .check-option').forEach((label,i)=>{label.classList.add('disabled'); if(q.answers.includes(i))label.classList.add('correct'); if(selected.includes(i)&&!q.answers.includes(i))label.classList.add('wrong');});
    } else {
      const selected=Number(document.getElementById('sectionSelect').value); correct=selected===q.answer;
      const select=document.getElementById('sectionSelect'); select.disabled=true; select.classList.add(correct?'correct':'wrong');
    }
    if(correct)sectionState.score+=(q.marks||1);
    recordWeak("Section test", q.q, sectionState.area, correct);
    box.insertAdjacentHTML('beforeend',`<div class="quiz-result"><strong>${correct?'Correct':'Not quite'}</strong><p>${esc(q.explain)}</p></div>`);
  } else {
    const text=(document.getElementById('sectionText')?.value||'').trim();
    const checks=q.checklist||[];
    box.insertAdjacentHTML('beforeend',`<div class="written-model"><h4>Model answer</h4><p>${esc(q.model)}</p><h4>Self-marking checklist</h4><p class="hint">This is a revision rubric, not an official APM mark scheme. Award yourself only for points you genuinely covered.</p><div class="mark-list">${checks.map((x,i)=>`<label><input type="checkbox" data-section-mark="${i}"> <span>${esc(x)}</span></label>`).join('')}</div><div class="mark-score"><span>Your score:</span><strong id="sectionWrittenScore">0 / ${q.marks}</strong></div><div class="written-rating"><button class="rating-good" id="sectionGot">✓ I covered the answer</button><button class="rating-bad" id="sectionWeak">✗ Need to revise</button></div></div>`);
    const checksEls=[...box.querySelectorAll('input[data-section-mark]')]; const scoreEl=box.querySelector('#sectionWrittenScore');
    checksEls.forEach(c=>c.addEventListener('change',()=>{const raw=checksEls.filter(x=>x.checked).length; const scaled=Math.min(q.marks, Math.round(raw/checks.length*q.marks)); scoreEl.textContent=`${scaled} / ${q.marks}`;}));
    box.querySelector('#sectionGot').onclick=()=>rateSectionWritten(true,q,checksEls,text);
    box.querySelector('#sectionWeak').onclick=()=>rateSectionWritten(false,q,checksEls,text);
    const submit=box.querySelector('.section-submit'); if(submit)submit.disabled=true;
  }
  if(q.type==='multi'||q.type==='select') addSectionNextButton();
}
function rateSectionWritten(got,q,checks,text){
  const raw=checks.filter(x=>x.checked).length; const marks=Math.min(q.marks,Math.round(raw/checks.length*q.marks)); const passed=got && marks>=Math.max(1,q.marks-1); sectionState.score+=marks; recordWeak('Section test',q.q,sectionState.area,passed,`${marks}/${q.marks} self-marked`);
  document.querySelectorAll('.written-rating button').forEach(b=>b.disabled=true);
  addSectionNextButton();
}
function addSectionNextButton(){
  const box=document.getElementById("sectionTestArea"); if(box.querySelector('.section-next'))return;
  const n=document.createElement("button"); n.className="primary section-next"; n.textContent=sectionState.index===sectionState.questions.length-1?"Finish section test":"Next question"; n.onclick=()=>{ if(sectionState.index===sectionState.questions.length-1)finishSectionTest(); else {sectionState.index++;sectionState.answered=false;showSectionQuestion();} }; box.appendChild(n);
}
function finishSectionTest(){
  const pct=Math.round(sectionState.score/sectionState.maxMarks*100); const scores=JSON.parse(localStorage.getItem(sectionScoreKey)||"{}"); scores[sectionState.area]=pct; localStorage.setItem(sectionScoreKey,JSON.stringify(scores));
  document.getElementById("sectionTestArea").innerHTML=`<h3>${esc(sectionState.area)} complete</h3><p>You scored <strong>${sectionState.score}/${sectionState.maxMarks} marks</strong> (${pct}%).</p><p>${pct>=85?'Strong. Now practise the written/application questions without looking at the model.':pct>=70?'Decent, but do not mistake recognition for mastery. Revisit the questions where the distractors caught you.':'Diagnostic result. Revisit the section, then retest it under timed conditions.'}</p><p class="hint">These tests deliberately use close distractors and mixed formats so a correct answer is evidence of understanding, not just recognition of an obvious option.</p><button class="primary" id="retrySection">Try again</button>`;
  document.getElementById("retrySection").onclick=()=>startSectionTest(sectionState.area);
}

function startQuiz(){ quizState.questions=shuffle(quizQuestions).slice(0,10);quizState.index=0;quizState.score=0;quizState.answered=false;showQuestion(); }
function showQuestion(){ const q=quizState.questions[quizState.index]; quizArea.innerHTML=`<p><strong>Question ${quizState.index+1} of ${quizState.questions.length}</strong></p><p class="quiz-question">${esc(q.q)}</p><div id="options" class="options"></div>`; q.options.forEach((o,i)=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=o;b.onclick=()=>answerQuestion(i);document.getElementById("options").appendChild(b);}); }
function answerQuestion(selected){ if(quizState.answered)return; quizState.answered=true; const q=quizState.questions[quizState.index];const correct=selected===q.answer;if(correct)quizState.score++; recordWeak("10-question quiz", q.q, q.area || "Mixed PMQ", correct);document.querySelectorAll("#options .quiz-option").forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");if(i===selected&&!correct)b.classList.add("wrong");});const result=document.createElement("div");result.className="quiz-result";result.innerHTML=`<strong>${correct?'Correct.':'Not quite.'}</strong><p>${esc(q.explain)}</p>`;const next=document.createElement("button");next.className="primary";next.textContent=quizState.index===quizState.questions.length-1?"Finish quiz":"Next question";next.onclick=()=>{if(quizState.index===quizState.questions.length-1)finishQuiz();else{quizState.index++;quizState.answered=false;showQuestion();}};result.appendChild(next);quizArea.appendChild(result); }
function finishQuiz(){const pct=Math.round(quizState.score/quizState.questions.length*100);const best=Math.max(pct,Number(localStorage.getItem("pmqBestScore")||0));localStorage.setItem("pmqLastScore",pct);localStorage.setItem("pmqBestScore",best);quizArea.innerHTML=`<h3>Quiz complete</h3><p>You scored <strong>${quizState.score}/${quizState.questions.length}</strong> (${pct}%).</p><p>${pct>=80?'Good. Now prioritise scenarios and written answers.':'Use this as a diagnostic, then revisit your weak topics.'}</p><button class="primary" id="again">Try again</button>`;document.getElementById("again").onclick=startQuiz;updateStats();}

if(document.getElementById("startQuiz")) document.getElementById("startQuiz").onclick=startQuiz;
if(document.getElementById("resetProgress")) document.getElementById("resetProgress").onclick=()=>{if(confirm("Reset your topic progress and quiz scores?")){localStorage.removeItem(progressKey);localStorage.removeItem("pmqLastScore");localStorage.removeItem("pmqBestScore");localStorage.removeItem(sectionScoreKey);localStorage.removeItem(weakKey);renderTopics(searchInput.value);renderWeakAreas();updateStats();quizArea.innerHTML='<p>Progress reset.</p>';}};
if(searchInput) searchInput.addEventListener("input",()=>renderTopics(searchInput.value));
if(topicContainer){ renderTopics(); renderWeakAreas(); updateStats(); }
if(document.getElementById("clearWeak")) document.getElementById("clearWeak").onclick=()=>{if(confirm("Clear this week\'s weak areas?")) clearWeakWeek();};


const writtenQuestions = [
  {
    command: "Explain",
    area: "Setting up for success",
    q: "Explain why a project manager should keep the business case under review throughout the project life cycle.",
    model: "The business case should remain under review because the justification for the investment can change as the project develops. Changes to expected benefits, costs, risks, assumptions, timing or strategic alignment may alter whether the project remains viable. Reviewing it allows the appropriate decision makers to continue, change direction, re-plan or stop the project when the evidence no longer supports the original case.",
    checklist: [
      "States that the business case is not simply a one-off document and should remain relevant through the life cycle.",
      "Explains that benefits, costs, risks or assumptions can change.",
      "Links those changes to continued viability/justification.",
      "Explains that review supports an informed governance decision.",
      "Applies the point to possible actions such as continue, change, re-plan or stop."
    ]
  },
  {
    command: "Describe",
    area: "Planning & managing deployment",
    q: "Describe the main process a project manager should follow when an issue is identified.",
    model: "The issue should be recorded and evaluated to understand its impact. If appropriate, it is escalated to the sponsor or steering group when delegated tolerances are forecast to be or have been exceeded, and an owner is appointed. The agreed response is implemented and monitored at review points until the issue is resolved and closed out.",
    checklist: [
      "Identifies that the issue is logged/recorded.",
      "Includes evaluation of its impact.",
      "Recognises escalation when tolerances are exceeded or forecast to be exceeded.",
      "Includes ownership and implementation of an appropriate response.",
      "Includes monitoring, resolution and close-out."
    ]
  },
  {
    command: "Differentiate",
    area: "Planning & managing deployment",
    q: "Differentiate between a risk and an issue, using a project example to show the difference.",
    model: "A risk is an uncertainty that may affect project objectives if it occurs, whereas an issue is a problem or deviation that has happened or is forecast to exceed an agreed tolerance and therefore requires management action. For example, a supplier might be two weeks late if a shipping problem occurs: that is a risk. If the supplier confirms the two-week delay will happen, it becomes an issue requiring assessment and management.",
    checklist: [
      "Defines risk as uncertainty.",
      "Defines issue as something that has happened or is forecast to exceed tolerance/require action.",
      "Makes clear that risk management is proactive while issue management deals with an actual/forecast problem.",
      "Gives a relevant project example.",
      "Explains why the example changes from risk to issue."
    ]
  },
  {
    command: "Outline",
    area: "People & behaviours",
    q: "Outline how a project manager can tailor stakeholder engagement.",
    model: "The project manager should first understand stakeholders' interests, influence, impact and information needs. Engagement can then be tailored by deciding what information is needed, who needs it, when it is needed, why it matters and the most suitable communication or involvement method. The approach should be reviewed as stakeholders and the project context change.",
    checklist: [
      "Identifies stakeholder interests/influence/impact or information needs.",
      "Recognises that different stakeholders need different approaches.",
      "Covers what information is needed and by whom.",
      "Covers timing and suitable communication/involvement methods.",
      "Recognises that engagement should be reviewed and adapted."
    ]
  },
  {
    command: "State",
    area: "Planning & managing deployment",
    q: "State five areas that should be considered when assessing the impact of a proposed project change.",
    model: "Relevant areas include scope/requirements, benefits, time/schedule, cost, quality, resources, risk, dependencies and stakeholders. A strong answer only needs five, provided they are relevant and accurately stated.",
    checklist: [
      "Names a relevant impact area 1.",
      "Names a relevant impact area 2.",
      "Names a relevant impact area 3.",
      "Names a relevant impact area 4.",
      "Names a relevant impact area 5."
    ]
  },
  {
    command: "Explain",
    area: "Planning & managing deployment",
    q: "A project has a resource peak that can be moved within available float without changing the planned project finish date. Explain the difference between resource smoothing and resource levelling in this situation.",
    model: "Resource smoothing adjusts the timing of resource use within available schedule flexibility, such as float, so that resource peaks are reduced without changing the planned project completion date. Resource levelling is used when resource over-allocation needs to be resolved and may require activities to move beyond available float, potentially changing the project dates. In this scenario, smoothing is the appropriate concept because the work can be moved within available float without moving the planned finish.",
    checklist: [
      "Explains what resource smoothing does.",
      "Links smoothing to available float/flexibility.",
      "Explains that smoothing does not normally change the planned finish date.",
      "Contrasts this with resource levelling and possible date movement.",
      "Applies the distinction directly to the scenario."
    ]
  }
];
let writtenIndex=0, writtenStart=null;
function startWritten(){ writtenIndex=0; writtenStart=Date.now(); showWritten(); document.getElementById('writtenArea').scrollIntoView({behavior:'smooth',block:'start'}); }
function showWritten(){
  const q=writtenQuestions[writtenIndex];
  const area=document.getElementById('writtenArea');
  area.innerHTML=`<div class="written-top"><span><strong>${esc(q.command)}</strong> • ${esc(q.area)}</span><strong>Question ${writtenIndex+1} of ${writtenQuestions.length} • 5 marks</strong></div><h3>${esc(q.q)}</h3><p class="hint"><strong>Before you reveal anything:</strong> write your answer as if you were in the exam. For 5 marks, aim for clear, relevant points and explain/apply them where the command word requires it.</p><textarea id="writtenText" rows="10" placeholder="Write your answer here..."></textarea><div class="written-actions"><button class="primary" id="revealWritten">Reveal model answer & marking checklist</button><button class="secondary" id="skipWritten">Skip question</button></div><div id="writtenFeedback"></div>`;
  document.getElementById('revealWritten').onclick=()=>revealWritten(q);
  document.getElementById('skipWritten').onclick=()=>{writtenIndex=(writtenIndex+1)%writtenQuestions.length;showWritten();};
}
function revealWritten(q){
  const feedback=document.getElementById('writtenFeedback');
  feedback.innerHTML=`<div class="written-model"><h4>Model approach</h4><p>${esc(q.model)}</p><h4>Self-marking checklist</h4><p class="hint">Give yourself 1 mark for each checklist point you genuinely covered. This is a revision rubric, <strong>not an official APM mark scheme</strong>.</p><div class="mark-list">${q.checklist.map((x,i)=>`<label><input type="checkbox" data-mark="${i}"> <span>${esc(x)}</span></label>`).join('')}</div><div class="mark-score"><span>Your score:</span><strong id="writtenScore">0 / 5</strong></div><div class="written-rating"><button class="rating-good" id="writtenGot">✓ I can explain this</button><button class="rating-bad" id="writtenWeak">✗ Add to weak areas</button></div></div>`;
  const checks=[...feedback.querySelectorAll('input[data-mark]')];
  const score=feedback.querySelector('#writtenScore');
  checks.forEach(c=>c.addEventListener('change',()=>{score.textContent=`${checks.filter(x=>x.checked).length} / 5`; }));
  feedback.querySelector('#writtenGot').onclick=()=>rateWritten(true,q,checks);
  feedback.querySelector('#writtenWeak').onclick=()=>rateWritten(false,q,checks);
  document.getElementById('revealWritten').disabled=true;
}
function rateWritten(gotIt,q,checks){
  const marks=checks.filter(x=>x.checked).length;
  const passed=marks>=4 && gotIt;
  recordWeak('Written practice', `${q.command}: ${q.q}`, q.area, passed, `${marks}/5 self-mark`);
  const buttons=document.querySelectorAll('.written-rating button'); buttons.forEach(b=>b.disabled=true);
  const note=document.createElement('p'); note.className='hint'; note.textContent=passed?`Marked ${marks}/5 and understood for this attempt.`:`Marked ${marks}/5 and added to this week's weak areas. Re-attempt it later without looking.`; document.querySelector('.written-rating').after(note);
}
if(document.getElementById('startWritten')) document.getElementById('startWritten').onclick=startWritten;

const mockArea=document.getElementById("mockArea"); let mockIndex=0,mockStart=null;
function startMock(){mockIndex=0;mockStart=Date.now();showMock();mockArea.scrollIntoView({behavior:'smooth',block:'start'});}
function showMock(){const q=mockQuestions[mockIndex]; currentWrittenMockQuestion=q;mockArea.innerHTML=`<div class="mock-top"><span>Mini Mock</span><strong>Question ${mockIndex+1} of ${mockQuestions.length} • ${q.marks} mark${q.marks===1?'':'s'}</strong></div><h3>${esc(q.q)}</h3><div id="mockInput"></div>`;const input=document.getElementById('mockInput');
 if(q.type==='multi'){input.innerHTML='<p class="hint">Select all that apply.</p>'+q.options.map((o,i)=>`<label class="check-option"><input type="checkbox" value="${i}"> ${esc(o)}</label>`).join('')+'<button class="primary mock-submit">Submit</button>';}
 else if(q.type==='select'){input.innerHTML=`<label class="select-line">Choose the missing word: <select id="mockSelect">${q.options.map((o,i)=>`<option value="${i}">${esc(o)}</option>`).join('')}</select></label><button class="primary mock-submit">Submit</button>`;}
 else {input.innerHTML=`<p class="hint">Write your answer in the box before revealing the model answer.</p><textarea id="mockText" rows="7" placeholder="Type your answer here..."></textarea><button class="primary mock-submit">Reveal model answer & check</button>`;}
 input.querySelector('.mock-submit').onclick=()=>submitMock(q);
}
function submitMock(q){let answer;if(q.type==='multi')answer=[...document.querySelectorAll('#mockInput input:checked')].map(x=>Number(x.value));else if(q.type==='select')answer=Number(document.getElementById('mockSelect').value);else answer=document.getElementById('mockText').value.trim();let correct=false;if(q.type==='multi')correct=answer.length===q.answers.length&&answer.every(x=>q.answers.includes(x));else if(q.type==='select')correct=answer===q.answer;if(q.type==='multi'||q.type==='select') recordWeak('Mini mock', q.q, q.area || 'Mixed PMQ', correct);const box=document.getElementById('mockInput');let result='';if(q.type==='short'||q.type==='long'){result=`<div class="model-answer"><h4>Model answer / checking guide</h4><p>${esc(q.model)}</p><h5>Self-check</h5><ul>${q.checklist.map(x=>`<li>☐ ${esc(x)}</li>`).join('')}</ul><p class="hint">For written answers, do not ask whether your wording matches exactly. Ask whether you covered the required points and explained them clearly.</p><div class="mock-rating"><button class="rating-good" onclick="rateWrittenMock(true)">✓ I covered it</button><button class="rating-bad" onclick="rateWrittenMock(false)">✗ Need to revise</button></div></div>`;}else{result=`<div class="quiz-result"><strong>${correct?'Correct':'Review this one'}</strong><p>${esc(q.explain)}</p></div>`;}box.insertAdjacentHTML('beforeend',result);const next=document.createElement('button');next.className='primary';next.textContent=mockIndex===mockQuestions.length-1?'Finish mini mock':'Next question';next.onclick=()=>{if(mockIndex===mockQuestions.length-1)finishMock();else{mockIndex++;showMock();}};box.appendChild(next);}
let currentWrittenMockQuestion=null;
function rateWrittenMock(gotIt){
  const q=currentWrittenMockQuestion || mockQuestions[mockIndex];
  recordWeak('Mini mock', q.q, q.area || 'Mixed PMQ', gotIt, gotIt?'':'Written answer flagged for revision');
  const buttons=document.querySelectorAll('.mock-rating button'); buttons.forEach(b=>b.disabled=true);
  const note=document.createElement('p'); note.className='hint'; note.textContent=gotIt?'Marked as understood for this attempt.':'Added to this week\'s weak areas.'; document.querySelector('.mock-rating')?.after(note);
}

function finishMock(){const secs=Math.round((Date.now()-mockStart)/1000);mockArea.innerHTML=`<h3>Mini mock complete</h3><p>You completed ${mockQuestions.length} questions in ${Math.floor(secs/60)}m ${secs%60}s.</p><p>For this mock, the important part is not just the score: compare your written answers against the structure checklist and identify which command types slow you down.</p><button class="primary" id="mockAgain">Try again</button>`;document.getElementById('mockAgain').onclick=startMock;}
if(document.getElementById('startMock')) document.getElementById('startMock').onclick=startMock;

if(document.getElementById('flashcardGrid')){
  const grid=document.getElementById('flashcardGrid'), filter=document.getElementById('flashcardSearch');
  let cards=[...definitionCards], freeIndex=0, freeShuffled=[...definitionCards];
  function visibleCards(){const t=filter.value.toLowerCase();return cards.filter(c=>c.join(' ').toLowerCase().includes(t));}
  function renderCards(){
    const shown=visibleCards(); document.getElementById('flashCount').textContent=shown.length; grid.innerHTML='';
    shown.forEach(c=>{const card=document.createElement('button');card.className='flashcard';card.setAttribute('aria-label',`Flashcard ${c[0]}`);card.innerHTML=`<span class="flash-term">${esc(c[0])}</span><span class="flash-answer">${esc(c[1])}</span><span class="tap">Click to reveal</span>`;card.onclick=()=>{card.classList.toggle('flipped');card.querySelector('.tap').textContent=card.classList.contains('flipped')?'Click to hide':'Click to reveal';};grid.appendChild(card);});
    if(!shown.length)grid.innerHTML='<div class="empty">No definitions matched your search.</div>';
  }
  function renderFreeType(){
    if(!freeShuffled.length)return;
    const c=freeShuffled[freeIndex%freeShuffled.length], box=document.getElementById('freeTypeCard');
    box.className='free-type-card';
    box.innerHTML=`<div class="free-type-term">${esc(c[0])}</div><p class="hint">Type the definition in your own words before revealing the answer.</p><textarea id="freeAnswer" placeholder="Type your answer here..."></textarea><div class="free-type-actions"><button class="primary" id="revealFree">Reveal answer</button><button class="secondary" id="skipFree">Skip</button></div><div class="free-type-answer"><strong>Model answer</strong><p>${esc(c[1])}</p></div><div class="self-rating"><button class="primary rating-good" id="gotFree">✓ Got it</button><button class="secondary rating-bad" id="missedFree">✗ Need to revise</button></div>`;
    document.getElementById('revealFree').onclick=()=>box.classList.add('revealed');
    document.getElementById('skipFree').onclick=()=>{freeIndex++;renderFreeType();};
    document.getElementById('gotFree').onclick=()=>{recordWeak('Flashcard',c[0],'Key definitions',true);freeIndex++;renderFreeType();};
    document.getElementById('missedFree').onclick=()=>{recordWeak('Flashcard',c[0],'Key definitions',false,'Definition flagged for revision');freeIndex++;renderFreeType();};
  }
  document.getElementById('shuffleCards').onclick=()=>{cards=shuffle(cards);renderCards();};
  filter.oninput=renderCards;
  const freeBtn=document.getElementById('freeTypeMode'), panel=document.getElementById('freeTypePanel');
  freeBtn.onclick=()=>{panel.hidden=false;grid.parentElement.hidden=true;document.getElementById('flashModeHint').textContent='Free-type mode: type first, then reveal and self-rate';freeShuffled=shuffle(cards);freeIndex=0;renderFreeType();panel.scrollIntoView({behavior:'smooth',block:'start'});};
  document.getElementById('closeFreeType').onclick=()=>{panel.hidden=true;grid.parentElement.hidden=false;document.getElementById('flashModeHint').textContent='Click a card to reveal';};
  renderCards();
}


/* =========================
   MY LIFE -> PMQ MODE
   Personalised memory anchors: connect a PMQ concept to a familiar
   real-life context, retrieve it, then translate it into exam language.
   ========================= */
(function initLifeLab(){
  const lab=document.getElementById('lifeLab');
  const randomBtn=document.getElementById('lifeRandom');
  const startBtn=document.getElementById('startLifeLab');
  const contextSelect=document.getElementById('lifeContext');
  const browse=document.getElementById('lifeBrowseGrid');
  if(!lab || !contextSelect) return;

  const lifeLinks=[
    {topic:'Life cycles',id:'life-cycles',context:'website',label:'My welfare website / coding',definition:'A project life cycle describes how work is structured and progressed from start through delivery and closure.',anchor:'Your website did not jump straight from “idea” to finished site. You learned, planned, built, got feedback, changed things and prepared it for people to use.',challenge:'Your requirements become clearer as users give feedback. Which life-cycle approach would make sense, and why?',model:'An iterative approach may be suitable where requirements are uncertain and feedback is needed. Repeated cycles allow the solution to be developed and refined as understanding improves.',keywords:['life cycle','uncertainty','feedback','repeated cycles','refinement'],exam:'Do not stop at “iterative”. Explain the uncertainty or feedback in the scenario that makes it appropriate.'},
    {topic:'Governance arrangements',id:'governance',context:'work',label:'Army / work / IHUB',definition:'Governance defines how a project is directed, controlled, held accountable and given authority to make decisions.',anchor:'Think about the chain above you. Different people have different authority and responsibilities. Not every decision belongs to the person doing the work.',challenge:'A project manager discovers that a decision is outside their delegated authority. What should happen?',model:'The PM should use the agreed governance and escalation route. The decision should be taken by the appropriate authority, with enough information about impacts, risks and options to support an informed decision.',keywords:['authority','accountability','decision rights','escalation','oversight'],exam:'Governance is not simply “the boss”. Think direction, authority, accountability and oversight.'},
    {topic:'Sustainability',id:'sustainability',context:'family',label:'Family / nursery / days out',definition:'Sustainability considers environmental, social and economic impacts and whole-life value when making decisions.',anchor:'When planning a family day out, the cheapest or fastest option is not automatically the best overall option. You may consider travel, accessibility, waste, cost, enjoyment and what remains practical afterwards.',challenge:'A project option is cheap to deliver but creates much higher operating costs and environmental impact over its life. What should the PM consider?',model:'The decision should consider whole-life value rather than only the initial project cost. Environmental, social and economic impacts should be considered alongside project objectives and requirements.',keywords:['whole-life value','environmental','social','economic','long-term impact'],exam:'Sustainability is broader than “being green”. Include environmental, social and economic considerations where relevant.'},
    {topic:'Business case',id:'business-case',context:'website',label:'My welfare website / coding',definition:'The business case explains why the project should be undertaken and supports investment decisions by considering value, costs, risks and options.',anchor:'You did not build the welfare website merely because coding is interesting. There was a reason for doing it: solve a real communication/access problem and provide something useful to its audience.',challenge:'A project is enjoyable to build but there is weak evidence that it solves a genuine need. What should the business case test?',model:'The business case should test whether the proposed project is justified. It should consider the need, expected benefits/value, costs, risks, options and strategic alignment so that decision makers can judge whether investment remains worthwhile.',keywords:['need','benefits/value','costs','risks','options','justification'],exam:'Ask “why are we doing this?” then connect the answer to value, cost, risk and continued justification.'},
    {topic:'Procurement',id:'procurement',context:'work',label:'Army / work / IHUB',definition:'Procurement is the approach used to obtain goods or services in a way that supports project objectives, value, quality and risk control.',anchor:'At work, you may need something another person or organisation must provide rather than doing it yourself. The way you specify, select and manage that supply affects time, cost, quality and risk.',challenge:'A supplier offers the lowest price but cannot meet the required delivery date. Is choosing the cheapest option automatically best?',model:'No. Procurement decisions should consider the requirements and overall project objectives, including cost, quality, delivery, risk, capability and value. Lowest price alone may create greater project risk or fail the requirement.',keywords:['requirements','value','cost','quality','delivery','risk'],exam:'Do not equate procurement with “buying cheaply”. Explain how the sourcing approach supports project objectives.'},
    {topic:'Reviews',id:'reviews',context:'work',label:'Army / work / IHUB',definition:'A review is a structured assessment of progress, status, viability, decisions, risks or learning at an appropriate point.',anchor:'Your monthly management checks are a useful mental model: information is gathered, checked and used to decide whether things are where they should be and whether action is needed.',challenge:'A project reaches a review point and the expected benefits have weakened while costs have risen. What should the review help decision makers determine?',model:'The review should assess whether the project remains viable and justified, considering benefits, costs, risks, schedule, strategic alignment and options. It should support an informed decision such as continue, change, re-plan or stop.',keywords:['structured assessment','progress','viability','evidence','decision'],exam:'A review is not just “checking paperwork”. Show what is being assessed and what decision the evidence supports.'},
    {topic:'Assurance',id:'assurance',context:'work',label:'Army / work / IHUB',definition:'Assurance provides sufficiently independent and objective confidence that a project is being governed and delivered effectively and remains capable of achieving its objectives.',anchor:'Think of checks that give the next chain confidence that the work is actually being done properly. The value is not just completing the check; it is giving decision makers confidence based on evidence.',challenge:'The PM says the project is on track, but an independent check finds weak controls. Why is assurance valuable?',model:'Assurance provides an objective challenge and confidence beyond the project team’s own reporting. The finding gives governance evidence that corrective action or escalation may be needed.',keywords:['confidence','independent/objective','governance','controls','evidence'],exam:'Assurance gives confidence to governance. It is not simply the PM checking their own work.'},
    {topic:'Transition management',id:'transition',context:'website',label:'My welfare website / coding',definition:'Transition management moves project outputs into operational use and prepares people, processes and support so the intended change can work.',anchor:'A website being coded is not the same as people actually being able to use it. Think about deployment, access, ownership, guidance, support and the point at which the new thing becomes normal work.',challenge:'A system is technically complete but users are untrained and support arrangements are not ready. Is successful transition complete?',model:'No. Technical completion is not enough. Transition needs operational readiness, ownership, training, support, documentation and acceptance so the output can be adopted and used effectively.',keywords:['handover','operational readiness','training','support','ownership','adoption'],exam:'Output delivered ≠ successful transition. Look for the receiving organisation and readiness to operate.'},
    {topic:'Benefits management',id:'benefits',context:'website',label:'My welfare website / coding',definition:'Benefits management identifies, plans, measures, tracks and supports the realisation of the improvements or value expected from project outputs and outcomes.',anchor:'A website existing is an output. If it actually makes information easier to access or reduces avoidable enquiries, that is where the intended benefit appears.',challenge:'A new booking system works technically, but waiting times have not reduced. What should benefits management investigate?',model:'Benefits management should investigate whether the required outcome and behaviour change have occurred, whether users have adopted the system, whether the measures are correct and what conditions are needed for the intended benefit to be realised.',keywords:['output','outcome','benefit','measurement','realisation','adoption'],exam:'Always separate the thing delivered from the improvement created by using it.'},
    {topic:'Stakeholder engagement & communication',id:'stakeholders',context:'website',label:'My welfare website / coding',definition:'Stakeholder engagement identifies and understands people or organisations affected by or able to affect the project, then tailors communication and involvement appropriately.',anchor:'Your website involved OCs, other members of the department and families. They did not all have the same perspective or need, so feedback and communication had to be adapted.',challenge:'A stakeholder has high influence but little time and is becoming concerned about the project. How should engagement be adapted?',model:'Engagement should reflect the stakeholder’s influence, interest and concerns. Use concise, relevant information, give opportunities for questions or decisions and manage expectations rather than simply sending more information.',keywords:['identify','analyse','influence','interest','tailor','two-way communication'],exam:'Communication is not automatically engagement. Explain how the relationship, influence and need for involvement are managed.'},
    {topic:'Conflict resolution',id:'conflict',context:'family',label:'Family / nursery / days out',definition:'Conflict resolution addresses disagreement constructively and seeks an acceptable way forward based on the cause, relationships, objectives and constraints.',anchor:'Family planning can involve different priorities: one person wants one activity, another has a timing constraint, children have needs, and there is limited time. The useful skill is finding the actual source of disagreement rather than winning.',challenge:'Two project stakeholders want incompatible outcomes and both believe their requirement is the priority. What should the PM do first?',model:'The PM should understand the causes, interests, constraints and desired outcomes before choosing a response. They can then facilitate negotiation or another appropriate conflict-management approach to reach an acceptable way forward.',keywords:['cause','interests','constraints','negotiation','acceptable outcome'],exam:'Do not assume conflict means someone is difficult. Identify the underlying interests and choose a proportionate response.'},
    {topic:'Stakeholder engagement & communication',id:'stakeholders-court',context:'court',label:'Court / multi-stakeholder process',definition:'Stakeholder engagement identifies and understands people or organisations affected by or able to affect a process, then tailors communication and involvement appropriately.',anchor:'Use only the abstract process here: different people may have different roles, information, interests and expectations, and progress can depend on information or decisions from more than one person.',challenge:'Several stakeholders need different information and have different levels of influence. What should you consider when planning engagement?',model:'Identify the stakeholders, understand their interests, influence, information needs and concerns, then tailor communication and involvement accordingly. Keep the focus on what each stakeholder needs to know, decide or contribute.',keywords:['stakeholder identification','interest','influence','information needs','tailored engagement'],exam:'The scenario matters. Explain why the engagement approach fits the stakeholder rather than listing generic communication methods.'},
    {topic:'Leadership',id:'leadership',context:'kickboxing',label:'Kickboxing',definition:'Leadership provides direction, influences behaviour and creates conditions in which people can work towards objectives.',anchor:'A good coach does more than tell you what to punch. They create direction, demonstrate standards, motivate you, give feedback and adapt how they support different people.',challenge:'A team is technically capable but has lost focus and motivation after several setbacks. What leadership response is likely to help?',model:'The leader should re-establish a clear shared direction, understand what is affecting the team, communicate openly, model appropriate behaviour and support people to regain confidence and focus.',keywords:['direction','influence','motivation','communication','role model'],exam:'Leadership is about influencing people towards an objective, not simply having authority.'},
    {topic:'Team management',id:'teams',context:'kickboxing',label:'Kickboxing',definition:'Team management involves organising, supporting and developing people so that the team can perform effectively.',anchor:'Partner drills show why roles, communication, practice, feedback and trust matter. The group performs better when everyone knows what they are doing and can learn from mistakes.',challenge:'A project team has skilled individuals but poor coordination and duplicated effort. What should the PM address?',model:'The PM should clarify roles and responsibilities, improve communication and coordination, identify dependencies and support the team to work towards a shared objective. Team effectiveness is not just the sum of individual skills.',keywords:['roles','responsibilities','coordination','communication','shared objective'],exam:'A team problem is not always a competence problem. Look at roles, communication, coordination and the team environment.'},
    {topic:'Diversity & inclusion',id:'diversity',context:'work',label:'Army / work / IHUB',definition:'Diversity and inclusion create conditions in which differences are respected and people can contribute and participate fairly.',anchor:'In a team or department, different people may have different experiences, communication styles, availability and perspectives. Good project practice does not assume one way of working suits everyone.',challenge:'A project team keeps making decisions without hearing from people who use the service differently. What should the PM consider?',model:'The PM should create inclusive opportunities for relevant people to contribute and ensure different perspectives are considered in decisions. Inclusion can improve understanding, challenge assumptions and reduce the risk of designing for only one group.',keywords:['different perspectives','fair participation','inclusion','challenge assumptions','users'],exam:'Keep the focus on fair participation and better project decisions, not vague statements about diversity.'},
    {topic:'Ethics, compliance & professionalism',id:'ethics',context:'work',label:'Army / work / IHUB',definition:'Ethical and professional project practice uses appropriate judgement, competence, standards and conduct while complying with applicable requirements.',anchor:'In Army/work life you often have rules that must be followed even when another option looks quicker. Professional judgement means balancing objectives with obligations rather than quietly bypassing controls.',challenge:'A shortcut would save time but would breach a mandatory policy. What should the project manager do?',model:'The PM should not bypass a mandatory requirement simply to save time. They should understand the constraint, assess its project impact, seek an authorised route or escalation where necessary and maintain professional and compliant behaviour.',keywords:['professional judgement','standards','compliance','mandatory requirements','escalation'],exam:'Ethics is not “being nice”. Look for professional judgement, obligations, standards and doing the right thing when trade-offs exist.'},
    {topic:'Requirements management',id:'requirements',context:'website',label:'My welfare website / coding',definition:'Requirements management identifies, documents, analyses, prioritises, validates and controls what a project or solution needs to satisfy.',anchor:'When you built your website, “make a website” was not enough. You had to work out what pages, information, functionality and user needs had to be met.',challenge:'A stakeholder says halfway through development, “I assumed the website would also do X.” What should happen before the team simply builds it?',model:'The requirement should be clarified, documented and assessed against the agreed requirements and scope. Its impact on solution, cost, schedule, resources, quality and benefits should be considered and, if it is a change, handled through the agreed control process.',keywords:['identify','document','analyse','prioritise','validate','control'],exam:'Requirements tell you what needs to be satisfied. Do not jump straight from a new request to implementation.'},
    {topic:'Solutions development',id:'solutions',context:'website',label:'My welfare website / coding',definition:'Solutions development turns agreed requirements into a workable solution and refines it so that it can deliver the intended outcomes.',anchor:'You learned HTML/CSS, built the site, saw what the wireframe required, tested it and changed the implementation. That is solution development: turning needs into something usable.',challenge:'A proposed solution technically works but is difficult for the intended users to navigate. What should happen?',model:'The solution should be evaluated against requirements and user needs, then refined where necessary. Technical functionality alone is not enough if the solution does not support the intended users and outcomes.',keywords:['requirements','solution','user needs','refine','evaluate','outcomes'],exam:'A solution is more than a technical object. Link development back to requirements and intended outcomes.'},
    {topic:'Quality management',id:'quality',context:'website',label:'My welfare website / coding',definition:'Quality management directs and controls quality through planning, assurance and control so outputs meet requirements and are fit for purpose.',anchor:'When you checked whether the website matched the brief, worked on phones and behaved as intended, you were thinking about quality—not whether the code merely existed.',challenge:'A website passes a developer’s basic check but users report that key information is hard to find. What does quality management suggest?',model:'Quality should be judged against agreed requirements and fitness for purpose, not simply whether the developer believes the site works. User feedback can identify quality issues that require investigation and corrective action.',keywords:['requirements','fit for purpose','quality planning','assurance','control'],exam:'Quality is not “looks good”. Anchor it to requirements, standards, fitness for purpose and appropriate controls.'},
    {topic:'Integrated planning',id:'integrated-planning',context:'family',label:'Family / nursery / days out',definition:'Integrated planning coordinates scope, schedule, resources, cost, risk and other plans so they work together rather than in isolation.',anchor:'Your week is an integrated plan whether you call it that or not: work times, nursery, travel, study, kickboxing and family commitments all interact. Moving one thing can affect another.',challenge:'A project adds a major activity but the PM only updates the schedule and not resources, cost or risk. What is the problem?',model:'The plans are interdependent. A change to an activity can affect resources, cost, risks, dependencies, quality and benefits. The PM should assess the wider impacts and update the integrated plan rather than treating schedule as isolated.',keywords:['scope','schedule','resources','cost','risk','interdependencies'],exam:'Integrated planning means the pieces must fit together. Ask “what else does this change affect?”'},
    {topic:'Schedule management',id:'schedule',context:'family',label:'Nursery / work / weekly routine',definition:'Schedule management plans, develops, maintains and controls the timing and sequence of project work.',anchor:'Your nursery and work timetable has fixed points. If something runs late, it can affect the next activity, travel time or collection. Project schedules work in the same way through activities and dependencies.',challenge:'An activity is delayed by two days. What should the PM assess before simply moving the whole project end date?',model:'The PM should assess dependencies, float, critical path, downstream activities and any impact on milestones and other constraints. The delay may be absorbable or may require corrective action or escalation depending on the schedule.',keywords:['activities','sequence','dependencies','float','critical path','milestones'],exam:'Do not equate delay with automatically moving the finish date. First analyse the schedule structure.'},
    {topic:'Resource management',id:'resources',context:'kickboxing',label:'Kickboxing / training time',definition:'Resource management plans and controls the people, equipment, materials and other resources needed to deliver the project.',anchor:'You have limited time and energy. You cannot train every technique for hours every day while also doing work, study and family commitments. You have to allocate scarce resources to priorities.',challenge:'Two important project activities need the same specialist person at the same time. What does resource management require?',model:'The PM should identify the resource conflict, assess priorities and constraints, and consider options such as resequencing, reallocating resources, changing timing or obtaining additional capacity. The decision should consider project objectives and impacts.',keywords:['people','capacity','allocation','scarce resources','priorities','constraints'],exam:'Resources are not just money. Think people, equipment, materials, time/capacity and availability.'},
    {topic:'Budgeting & cost control',id:'budget',context:'family',label:'Family / days out',definition:'Budgeting establishes an authorised financial plan, while cost control monitors and manages actual and forecast expenditure against it.',anchor:'A family day out has a budget. Spending £20 more on one thing affects what remains for everything else. A project budget works the same way, except the consequences can be much bigger.',challenge:'Actual project spending is higher than planned, but the project is still within its approved total budget. What should the PM do?',model:'The PM should not ignore the variance. They should understand why actual spend differs from plan, assess forecasts and remaining work, and determine whether corrective action or escalation is required within agreed tolerances.',keywords:['budget','actual cost','forecast','variance','control','tolerance'],exam:'Budget is the plan. Cost control is what you do with actual and forecast performance against that plan.'},
    {topic:'Risk & issue management',id:'risk-issues',context:'driving',label:'Driving',definition:'Risk management deals with uncertainty that could affect objectives; issue management deals with something that has happened or requires management action.',anchor:'Driving gives you a perfect distinction. “There might be traffic” is uncertainty. “I am currently stuck in traffic” is a current problem requiring action.',challenge:'A supplier says delivery will be two weeks late. Is this still a risk?',model:'It is an issue because the lateness is now known or forecast as a specific problem requiring management action. A risk is uncertain; once the event has occurred or is sufficiently certain/forecast to require action, it should be managed as an issue.',keywords:['uncertainty','event','happened/forecast','impact','response','escalation'],exam:'Watch the wording. “Might/could” often signals uncertainty; “has happened/will be late” can indicate an issue.'},
    {topic:'Change control',id:'change-control',context:'website',label:'My welfare website / coding',definition:'Change control ensures proposed changes to approved project elements are assessed, authorised, recorded and implemented in a controlled way.',anchor:'Your website changed as you learned more. A controlled change is not “never change”; it is “understand what changing this will do before we accept it”.',challenge:'A stakeholder asks for a new feature halfway through development. What should the PM assess before approving it?',model:'The PM should clarify and record the request, assess impacts on scope, requirements, schedule, cost, resources, quality, risk and benefits, then use the agreed authority and change-control process. If approved, the relevant baselines and plans should be updated and the change communicated.',keywords:['request','impact assessment','authority','approval','baseline','communication'],exam:'Change control is not a barrier to change. It is how you change things without losing control of the project.'},
    {topic:'Project manager vs BAU',id:'baU-memory',context:'family',label:'Nursery / normal routine',definition:'Projects are unique and temporary; business as usual is repetitive, continuous operational activity.',anchor:'Your normal nursery/work routine is BAU: it repeats. Planning a one-off family trip is temporary and unique. The fact that something is new does not automatically make it a project.',challenge:'A new booking system is introduced and then becomes the organisation’s normal daily system. Is using it BAU?',model:'Yes. The implementation may have been a project, but once the system is operating as part of normal, continuous work, using it is BAU. The project and the resulting operational activity should not be confused.',keywords:['unique','temporary','continuous','repetitive','project vs BAU'],exam:'Ask whether the activity itself is temporary and unique, not merely whether the thing being used is new.'}
  ];

  function escLife(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  let pool=lifeLinks.slice();
  let current=null;

  function getPool(){
    const c=contextSelect.value;
    return c==='all'?lifeLinks.slice():lifeLinks.filter(x=>x.context===c);
  }
  function renderBrowse(){
    browse.innerHTML=lifeLinks.map(x=>`<div class="life-browse-item"><strong>${escLife(x.topic)}</strong><small>${escLife(x.label)}</small></div>`).join('');
  }
  function pick(){
    const options=getPool();
    if(!options.length)return;
    if(options.length>1 && current){
      const filtered=options.filter(x=>x.id!==current.id);
      current=filtered[Math.floor(Math.random()*filtered.length)];
    }else current=options[Math.floor(Math.random()*options.length)];
    renderCard();
  }
  function renderCard(){
    if(!current)return;
    lab.innerHTML=`<article class="life-card" id="lifeCurrentCard">
      <div class="life-card-top"><div><span class="life-context-badge">${escLife(current.label)}</span><h3>${escLife(current.topic)}</h3></div><span class="small-note">PMQ concept → real life → exam</span></div>
      <div class="life-definition"><strong>PMQ idea:</strong> ${escLife(current.definition)}</div>
      <div class="life-anchor"><h4>🔗 Your-world anchor</h4><p>${escLife(current.anchor)}</p></div>
      <div class="life-translation"><h4>🧩 Make the connection</h4><p>When you see <strong>${escLife(current.topic)}</strong> in an exam, mentally picture the example above first. Then translate the experience back into PMQ language.</p></div>
      <div class="life-challenge"><h4>🎯 Your turn — retrieve before revealing</h4><p>${escLife(current.challenge)}</p><textarea id="lifeAnswer" placeholder="Explain your answer in your own words, or answer aloud..."></textarea><button class="primary life-reveal" id="lifeReveal">Reveal the model</button>
        <div class="life-model" id="lifeModel"><strong>Model PMQ answer</strong><p>${escLife(current.model)}</p><div class="life-keywords"><strong>🔑 Keywords to listen for</strong><ul>${current.keywords.map(k=>`<li>${escLife(k)}</li>`).join('')}</ul></div><div class="life-exam-bridge"><strong>Exam bridge:</strong> ${escLife(current.exam)}</div></div>
      </div>
      <div class="life-actions"><button class="primary life-next" id="lifeNext">Next connection →</button><div class="life-rating"><button class="primary" id="lifeGot">🟢 I can make the link</button><button class="secondary" id="lifeWeak">🟠 Still fuzzy</button></div></div>
      <p class="small-note">Be honest: if the analogy helped you understand it but you could not translate it into PMQ language, mark it as still fuzzy.</p>
    </article>`;
    document.getElementById('lifeReveal').onclick=()=>{
      const card=document.getElementById('lifeCurrentCard'); card.classList.add('revealed'); document.getElementById('lifeReveal').disabled=true;
    };
    document.getElementById('lifeGot').onclick=()=>rate(true);
    document.getElementById('lifeWeak').onclick=()=>rate(false);
    document.getElementById('lifeNext').onclick=()=>pick();
  }
  function rate(ok){
    recordWeak('My Life → PMQ',current.topic,current.context==='court'?'Court / multi-stakeholder process':current.label,ok,ok?'Personal connection made':'Could not yet translate personal analogy into PMQ language');
    pick();
  }
  contextSelect.onchange=()=>{current=null;lab.innerHTML='<div class="life-empty"><div class="learn-icon">🧠</div><h3>Context changed</h3><p>Press <strong>Make it make sense</strong> for a connection from this part of your life.</p><button class="primary" id="contextStart">Give me one</button></div>';document.getElementById('contextStart').onclick=pick;};
  randomBtn.onclick=pick;
  startBtn.onclick=pick;
  renderBrowse();
})();

/* =========================
   LEARN & PLAY MODE
   One concept at a time: LEARN -> RETRIEVE -> APPLY -> EXPLAIN
   The application scenario always matches the concept just learned.
   ========================= */
(function initLearnMode(){
  const topicSelect=document.getElementById('learnTopic');
  const area=document.getElementById('learnArea');
  const start=document.getElementById('startLearn');
  if(!topicSelect || !area) return;

  const state={topic:null,factIndex:0,stage:'start',score:0,segmentsDone:0};
  const learnStoreKey='pmqLearnProgressV2';
  const loadLearn=()=>{try{return JSON.parse(localStorage.getItem(learnStoreKey)||'{}')}catch(e){return {}}};
  const saveLearn=x=>localStorage.setItem(learnStoreKey,JSON.stringify(x));
  const learnProgress=loadLearn();

  topics.forEach((t,i)=>{
    const o=document.createElement('option');
    o.value=t.id;
    o.textContent=t.title;
    o.dataset.index=i;
    topicSelect.appendChild(o);
  });

  function getTopic(){return topics.find(t=>t.id===topicSelect.value)||topics[0];}

  function meaningfulWord(sentence){
    const cleaned=sentence.replace(/^\s*(linear|iterative|hybrid|incremental|evolutionary|extended)\s*:\s*/i,'');
    const words=cleaned.match(/[A-Za-z][A-Za-z-]{5,}/g)||[];
    const stop=new Set(['project','projects','through','where','which','rather','should','their','these','those','because','using','within','important','relevant','appropriate','support','provides','provide','management','delivery','process','activities','including','benefits','requirements','organisation','organisational','information']);
    const pick=words.find(w=>!stop.has(w.toLowerCase()));
    if(pick) return pick;
    return words[0]||'';
  }

  function gapData(sentence){
    const term=meaningfulWord(sentence);
    const re=new RegExp('\\b'+term.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')+'\\b','i');
    return {term,masked:sentence.replace(re,'________')};
  }

  function setHeader(stage,total,index){
    const label=document.getElementById('learnStageLabel'), prog=document.getElementById('learnProgressLabel');
    const names={learn:'1 • LEARN',recall:'2 • RETRIEVE',apply:'3 • APPLY',explain:'4 • EXPLAIN',complete:'Complete'};
    label.textContent=names[stage]||stage;
    prog.textContent=`Segment ${Math.min(index+1,total)} / ${total}`;
  }

  function keywordsFor(topic, fact, model){
    if(topic.id==='life-cycles'){
      const f=fact.toLowerCase();
      if(f.startsWith('linear')) return ['Linear','Defined stages','Relatively stable scope','Planned sequencing','Predictable progression'];
      if(f.startsWith('iterative')) return ['Iterative','Repeated cycles','Feedback','Refinement','Learning'];
      if(f.startsWith('hybrid')) return ['Hybrid','Combination of approaches','Different project parts','Different needs','Fit the environment'];
      if(f.includes('phases')) return ['Phases','Decision points','Progressive approval','Viability','Further investment'];
      if(f.startsWith('extended')) return ['Extended life cycle','Beyond delivery','Transition','Adoption','Benefits realisation'];
      return ['Knowledge management','Capture learning','Share learning','Information management','Support decisions'];
    }
    const first=topic.title.replace(/^\d+\.\s*/,'');
    const terms=[];
    const text=(model||fact||'').replace(/[^A-Za-z0-9\s-]/g,' ');
    const words=text.split(/\s+/).filter(Boolean);
    const stop=new Set(['the','and','that','this','with','from','into','should','would','could','where','when','what','which','project','projects','because','rather','than','have','been','being','their','them','they','will','then','also','only','more','less','about','through','using','directly','appropriate','relevant','ensure','consider','provide','provides','does','not','for','are','is','to','of','a','an','in','on','as','by','or','it','if','be','can','has','may']);
    for(const w of words){
      const clean=w.toLowerCase();
      if(clean.length>=6 && !stop.has(clean) && !terms.some(x=>x.toLowerCase()===clean)) terms.push(w);
      if(terms.length>=4) break;
    }
    return [first,...terms].filter((v,i,a)=>v && a.findIndex(x=>x.toLowerCase()===v.toLowerCase())===i).slice(0,5);
  }

  function applicationPack(t, factIndex){
    const fact=t.know[factIndex%t.know.length];

    // Life cycles get a deliberately matched scenario for each model/idea.
    if(t.id==='life-cycles'){
      const packs=[
        {
          focus:'Linear life cycle',
          scenario:'A construction project has a stable specification, known statutory requirements and a sequence of activities that must be completed before handover. The sponsor wants detailed planning before work starts.',
          answer:'A linear life cycle is a strong fit because the scope and requirements are relatively stable and the work can be planned through defined stages in a planned sequence. The project can use reviews between stages to confirm that it remains viable before committing further resources.',
          keywords:['Linear','Defined stages','Stable scope','Planned sequencing','Reviews / decision points']
        },
        {
          focus:'Iterative life cycle',
          scenario:'Users are unsure exactly what they need from a new internal application. The team can build a prototype, obtain user feedback and refine the solution repeatedly.',
          answer:'An iterative life cycle is suitable because there is uncertainty about the requirements and the team needs feedback to learn what works. Repeated cycles allow the solution to be developed, reviewed and refined as understanding improves.',
          keywords:['Iterative','Repeated cycles','Uncertain requirements','Feedback','Refinement']
        },
        {
          focus:'Hybrid life cycle',
          scenario:'A major website transformation has fixed funding, governance and release milestones, but the user-facing software needs frequent development and user feedback within those boundaries.',
          answer:'A hybrid life cycle is suitable because different parts of the project have different needs. Predictive or linear elements can provide governance, funding and major milestones, while iterative development can be used for the uncertain user-facing software work.',
          keywords:['Hybrid','Combination','Different needs','Predictive / linear elements','Iterative elements']
        },
        {
          focus:'Phases and reviews',
          scenario:'A project is approaching the end of a phase. Costs have increased and the expected benefits have weakened. The organisation has not yet committed the resources required for the next phase.',
          answer:'The phase review should test whether the project remains viable before further resources are committed. The review should consider the changed costs, benefits, risks, schedule and strategic alignment, then support a decision such as continue, re-plan, change direction or stop.',
          keywords:['Phase review','Viability','Costs','Benefits','Decision before further investment']
        },
        {
          focus:'Extended life cycle',
          scenario:'A new HR system has been technically delivered, but users still need training, the operational owner needs to accept the system and the organisation needs to measure whether the expected efficiency benefits are realised.',
          answer:'An extended life cycle is relevant because the work continues beyond technical delivery into transition, adoption and benefits realisation. Delivering the system is an output; the organisation still needs to adopt it and demonstrate the intended benefits.',
          keywords:['Extended life cycle','Beyond delivery','Transition','Adoption','Benefits realisation']
        },
        {
          focus:'Knowledge and information management',
          scenario:'A project team has completed a major phase. Several decisions were made using lessons from earlier work, but those lessons are stored inconsistently and the next team cannot easily find the evidence behind previous decisions.',
          answer:'Knowledge management should capture and share the learning so that experience can inform future decisions. Information management should make the relevant information accessible, reliable and usable. The aim is not simply to store documents but to support better decisions.',
          keywords:['Knowledge management','Capture learning','Share learning','Information management','Support decisions']
        }
      ];
      return packs[factIndex%packs.length];
    }

    // Every other topic uses its own scenario and model answer; no topic switching.
    const model=t.applyAnswer || t.apply?.[0] || 'Link the concept directly to the scenario and explain why it matters.';
    return {
      focus:t.title.replace(/^\d+\.\s*/,''),
      scenario:t.scenario||'Consider how this concept would affect a project decision.',
      answer:model,
      keywords:keywordsFor(t,fact,model)
    };
  }

  function renderStart(){
    const t=getTopic();
    state.topic=t;
    state.factIndex=0;
    state.stage='start';
    state.score=0;
    state.segmentsDone=0;
    setHeader('learn',t.know.length,0);
    const saved=learnProgress[t.id];
    const progressNote=saved?.segmentsDone ? `<p class="learn-tip"><strong>Previous progress:</strong> ${saved.segmentsDone}/${t.know.length} segments completed. You can repeat the topic to strengthen recall.</p>` : '';
    area.innerHTML=`<div class="learn-start"><div class="learn-icon">🧠</div><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p><p class="learn-tip"><strong>One concept at a time:</strong> you will learn one segment, hide it, retrieve it, apply that <em>same</em> concept, then explain that <em>same</em> concept.</p>${progressNote}<button class="primary" id="beginSegment">Begin segment 1</button></div>`;
    document.getElementById('beginSegment').onclick=()=>showLearn();
  }

  function showLearn(){
    const t=state.topic||getTopic();
    const fact=t.know[state.factIndex%t.know.length];
    state.stage='learn';
    setHeader('learn',t.know.length,state.factIndex);
    area.innerHTML=`<div class="learn-stage"><span class="learn-stage-badge">Read this segment</span><h3>${esc(t.title)}</h3><div class="learn-segment"><strong>Focus:</strong> ${esc(fact)}</div><p class="learn-instruction">Take 20–40 seconds. Look for the idea, not a sentence to memorise.</p><div class="learn-actions"><button class="primary" id="hideAndRecall">Next — hide it</button></div></div>`;
    document.getElementById('hideAndRecall').onclick=()=>showRecall(fact);
  }

  function showRecall(fact){
    state.stage='recall';
    setHeader('recall',state.topic.know.length,state.factIndex);
    const g=gapData(fact);
    area.innerHTML=`<div class="learn-stage"><span class="learn-stage-badge">Retrieve</span><h3>Can you reconstruct the idea?</h3><p class="learn-instruction">Fill the gap from memory. Do not look back.</p><div class="learn-segment">${esc(g.masked)}</div><input class="gap-input" id="gapInput" autocomplete="off" placeholder="Type the missing word or phrase"><div class="learn-actions"><button class="primary" id="checkGap">Check</button><button class="secondary" id="revealGap">Reveal</button></div><div id="gapFeedback"></div></div>`;
    let checked=false;
    const enableContinue=()=>{const btn=document.getElementById('continueApply');if(btn)btn.disabled=false;};
    const check=()=>{
      if(checked)return;
      checked=true;
      const val=document.getElementById('gapInput').value.trim().toLowerCase();
      const ok=val===g.term.toLowerCase() || val.includes(g.term.toLowerCase());
      const fb=document.getElementById('gapFeedback');
      fb.className='learn-feedback '+(ok?'good':'review');
      fb.innerHTML=ok?`<strong>Correct.</strong> ${esc(g.term)} was the missing idea.`:`<strong>Not quite.</strong> The key word was <strong>${esc(g.term)}</strong>. Read the full statement once, then continue.`;
      if(!ok) recordWeak('Learn & Play',`${state.topic.title}: retrieval`,state.topic.area,false,'Gap recall'); else state.score++;
      document.getElementById('checkGap').disabled=true;
      enableContinue();
    };
    document.getElementById('checkGap').onclick=check;
    document.getElementById('revealGap').onclick=()=>{
      if(checked)return;
      checked=true;
      const fb=document.getElementById('gapFeedback');
      fb.className='learn-feedback review';
      fb.innerHTML=`<strong>Answer:</strong> ${esc(g.term)}<br><span>${esc(fact)}</span>`;
      document.getElementById('checkGap').disabled=true;
      recordWeak('Learn & Play',`${state.topic.title}: retrieval`,state.topic.area,false,'Answer revealed');
      enableContinue();
    };
    document.getElementById('gapInput').focus();
    document.getElementById('gapInput').addEventListener('keydown',e=>{if(e.key==='Enter')check();});
    const actions=document.querySelector('.learn-actions');
    const next=document.createElement('button');
    next.className='primary';
    next.textContent='Continue to application';
    next.disabled=true;
    next.id='continueApply';
    actions.appendChild(next);
    next.onclick=()=>showApply();
  }

  function showApply(){
    state.stage='apply';
    setHeader('apply',state.topic.know.length,state.factIndex);
    const t=state.topic;
    const fact=t.know[state.factIndex%t.know.length];
    const pack=applicationPack(t,state.factIndex);
    const checklist=pack.keywords.map(k=>`<li>${esc(k)}</li>`).join('');
    area.innerHTML=`<div class="learn-stage"><span class="learn-stage-badge">Apply</span><h3>${esc(pack.focus)}</h3><div class="learn-focus"><strong>What you are applying:</strong><span>${esc(fact)}</span></div><div class="learn-scenario"><strong>Scenario</strong><p>${esc(pack.scenario)}</p></div><p class="learn-instruction">Before revealing anything, answer the scenario in your own words. Your job is to connect the concept <strong>${esc(pack.focus)}</strong> directly to the situation.</p><textarea id="applyText" class="gap-input" rows="5" placeholder="Write your reasoning here, or answer aloud..."></textarea><div class="learn-actions"><button class="primary" id="revealModel">Reveal model approach</button></div><div id="applyModel" class="learn-model" hidden><div class="model-answer-heading">🎯 Model approach</div><p>${esc(pack.answer)}</p><div class="keyword-checklist"><strong>🔑 What a strong answer should contain</strong><ul>${checklist}</ul></div><p class="learn-exam-tip"><strong>Exam habit:</strong> do not just name the concept. Explain why it fits the scenario and use the facts in the scenario as evidence.</p></div></div>`;
    document.getElementById('revealModel').onclick=()=>{
      document.getElementById('applyModel').hidden=false;
      document.getElementById('revealModel').disabled=true;
      const b=document.createElement('button');
      b.className='primary';
      b.textContent='Next — explain it';
      b.onclick=()=>showExplain(pack);
      document.querySelector('.learn-actions').appendChild(b);
    };
  }

  function showExplain(pack){
    state.stage='explain';
    setHeader('explain',state.topic.know.length,state.factIndex);
    const t=state.topic;
    const fact=t.know[state.factIndex%t.know.length];
    const checklist=pack.keywords.map(k=>`<li>${esc(k)}</li>`).join('');
    area.innerHTML=`<div class="learn-stage"><span class="learn-stage-badge">Explain</span><h3>Teach it: ${esc(pack.focus)}</h3><div class="learn-explain"><p><strong>Prompt:</strong> Explain <em>${esc(pack.focus)}</em> to someone who knows nothing about project management.</p><p class="hint">Stay on this one concept. Say what it is, why it matters and how it affects a project. You can answer aloud — typing is optional.</p><p class="learn-explain-focus"><strong>Your original segment:</strong> ${esc(fact)}</p><textarea id="explainText" placeholder="Explain it in your own words..."></textarea><details class="explain-support"><summary>Reveal keyword checklist</summary><ul>${checklist}</ul></details><details class="explain-support"><summary>Reveal model definition / explanation</summary><div class="model-answer"><p>${esc(pack.answer)}</p></div></details></div><div class="learn-actions"><button class="primary" id="finishSegment">🟢 Got it</button><button class="secondary" id="explainWeak">🟠 Need another go</button></div><p class="learn-instruction"><strong>Be honest.</strong> If you could not explain it without looking, mark it as needing another go. That is useful data, not failure.</p></div>`;
    document.getElementById('finishSegment').onclick=()=>finishSegment(true);
    document.getElementById('explainWeak').onclick=()=>finishSegment(false);
  }

  function finishSegment(gotIt){
    const t=state.topic;
    recordWeak('Learn & Play',`${t.title}: ${applicationPack(t,state.factIndex).focus}`,t.area,gotIt,gotIt?'Self-rated understood':'Self-rated weak');
    state.segmentsDone++;
    if(gotIt)state.score++;
    const saved=loadLearn();
    saved[t.id]={segmentsDone:Math.max(saved[t.id]?.segmentsDone||0,state.segmentsDone),lastDone:new Date().toISOString()};
    saveLearn(saved);
    const nextIndex=state.factIndex+1;
    if(nextIndex>=t.know.length){
      state.stage='complete';
      setHeader('complete',t.know.length,t.know.length-1);
      area.innerHTML=`<div class="learn-complete"><div class="learn-icon">🏆</div><h3>Topic segment set complete</h3><p>You worked through all ${t.know.length} knowledge points in <strong>${esc(t.title)}</strong>.</p><p class="xp">${state.score} retrieval/understanding points earned</p><p>Now test the topic properly: use the section test below or deliberately choose a different topic. If you marked anything as <strong>Need another go</strong>, it has been added to your weak-area tracking.</p><div class="learn-actions" style="justify-content:center"><button class="primary" id="restartTopic">Repeat topic</button><button class="secondary" id="chooseTopic">Choose another topic</button></div></div>`;
      document.getElementById('restartTopic').onclick=()=>{state.factIndex=0;state.score=0;state.segmentsDone=0;showLearn();};
      document.getElementById('chooseTopic').onclick=()=>{topicSelect.focus();topicSelect.scrollIntoView({behavior:'smooth',block:'center'});};
      return;
    }
    state.factIndex=nextIndex;
    showLearn();
  }

  topicSelect.onchange=renderStart;
  start.onclick=renderStart;
  renderStart();
})();
