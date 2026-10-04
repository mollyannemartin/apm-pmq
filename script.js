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
    {q:"Which life cycle is most suitable when requirements are uncertain and frequent feedback is needed?", options:["Linear","Iterative","Fixed price","No defined life cycle"], answer:1, explain:"Iterative delivery allows repeated development and feedback."},
    {q:"What is a key purpose of governance?", options:["Do every project task","Provide direction, control and accountability","Remove every risk","Write every technical requirement"], answer:1, explain:"Governance establishes direction, oversight, decision rights and accountability."},
    {q:"Why should a business case be reviewed during a project?", options:["Only to change the project logo","To check the investment remains justified","To avoid stakeholder engagement","To replace the schedule"], answer:1, explain:"Changes in cost, risk, benefits or assumptions can affect whether the investment remains justified."},
    {q:"Which best describes the extended life cycle?", options:["Only project initiation","The wider period including transition/adoption and benefits realisation","Only procurement","Only project closure paperwork"], answer:1, explain:"The extended life cycle considers what happens beyond delivery, including transition, adoption and benefits."},
    {q:"Two options meet the requirement, but one has lower whole-life impact and higher initial cost. What should be considered?", options:["Only purchase price","Whole-life value and sustainability impacts","Only the PM's preference","Nothing beyond scope"], answer:1, explain:"Project decisions should consider whole-life cost/value and relevant sustainability impacts."}
  ],
  "Preparing for change": [
    {q:"What is the purpose of assurance?", options:["Provide independent confidence","Replace the project manager","Guarantee success","Write the business case"], answer:0, explain:"Assurance provides confidence to governance that the project is appropriately governed and controlled."},
    {q:"Which activity belongs in transition management?", options:["Ignoring the receiving business","Planning training and operational readiness","Deleting project records immediately","Avoiding acceptance criteria"], answer:1, explain:"Transition should address readiness, training, support, ownership and acceptance."},
    {q:"A project has delivered its output but the expected improvement has not occurred. What does this demonstrate?", options:["Outputs automatically equal benefits","Benefits require adoption and realisation","The project must always continue forever","Quality is irrelevant"], answer:1, explain:"Outputs are not automatically benefits; the intended outcome and measurable improvement must be realised."},
    {q:"What should a procurement strategy consider?", options:["Only supplier price","Make/buy, risk, quality, timing, cost and procurement route","Only the project logo","Only team preferences"], answer:1, explain:"Procurement decisions should consider the full delivery and risk context, not price alone."},
    {q:"A phase review identifies that expected benefits have weakened significantly. What should happen?", options:["Ignore it until closure","Use the review to reassess viability and decisions","Delete the benefits register","Automatically continue without change"], answer:1, explain:"Reviews should support evidence-based decisions about continuing, changing direction or stopping work."}
  ],
  "People and behaviours": [
    {q:"Why should stakeholder engagement be tailored?", options:["Everyone needs identical information","Different stakeholders have different interests, influence and information needs","It avoids communication","It removes accountability"], answer:1, explain:"Stakeholders vary in influence, interest, impact and requirements, so engagement should be appropriate to the audience."},
    {q:"Which is a useful approach to project conflict?", options:["Ignore the cause","Understand interests and address the underlying issue","Always choose the loudest person","Avoid evidence"], answer:1, explain:"Effective conflict management addresses causes, interests and the desired outcome."},
    {q:"A highly capable team is frustrated by excessive direction. What is a sensible leadership response?", options:["Increase micromanagement","Adapt the leadership approach and give appropriate autonomy","Remove all objectives","Stop communicating"], answer:1, explain:"Leadership should adapt to capability, confidence, urgency and context."},
    {q:"What is the difference between diversity and inclusion?", options:["They mean exactly the same thing","Diversity is representation of differences; inclusion enables meaningful participation","Inclusion means selecting identical people","Diversity means avoiding disagreement"], answer:1, explain:"Diversity concerns differences represented; inclusion concerns whether people can contribute fairly and meaningfully."},
    {q:"A project can save time by bypassing a required control. What should the PM do?", options:["Bypass it automatically","Consider legal, regulatory, ethical and organisational obligations and escalate appropriately","Hide the decision","Delete the control"], answer:1, explain:"Schedule pressure does not remove professional, legal or governance responsibilities."}
  ],
  "Planning & managing deployment": [
    {q:"What should happen when a requirement changes after the baseline?", options:["Start work immediately","Assess impact and use change control","Ignore the stakeholder","Change the baseline secretly"], answer:1, explain:"The change should be assessed for impacts and approved by the appropriate authority before implementation."},
    {q:"What does quality control primarily do?", options:["Check outputs against requirements/standards","Set organisational strategy","Approve every budget","Replace assurance"], answer:0, explain:"Quality control checks results/outputs against defined requirements and standards."},
    {q:"What is the critical path?", options:["The cheapest activities","The sequence determining the shortest possible project duration under the schedule model","All activities with no resources","The stakeholder list"], answer:1, explain:"The critical path identifies the dependency-driven sequence that determines project duration under the model used."},
    {q:"A supplier confirms a delivery will definitely be two weeks late. Risk or issue?", options:["Risk","Issue","Opportunity","Benefit"], answer:1, explain:"The uncertainty has materialised and requires management action, so it is an issue."},
    {q:"What is the main difference between change control and configuration management?", options:["They are identical","Change control governs approval of changes; configuration management controls the identity/status/version of controlled items","Configuration management approves budgets","Change control only applies to people"], answer:1, explain:"Change control governs whether/how a change is approved; configuration management maintains controlled item integrity and status."}
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
      const actions=document.createElement("div"); actions.className="topic-actions";
      const b=document.createElement("button"); b.className=progress[topic.id]?"secondary understood":"primary"; b.textContent=progress[topic.id]?"✓ Understood — click to reset":"Mark understood";
      b.onclick=()=>{ const p=getProgress(); p[topic.id]=!p[topic.id]; saveProgress(p); renderTopics(searchInput.value); updateStats(); };
      actions.appendChild(b); body.appendChild(actions); details.appendChild(body); areaDiv.appendChild(details);
    });

    const test = document.createElement("div"); test.className="section-test";
    test.innerHTML=`<div><p class="eyebrow">END-OF-SECTION CHECK</p><h4>Test yourself: ${esc(area)}</h4><p>Five questions. Don't look anything up.</p></div><button class="primary section-test-btn">Start section test</button>`;
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
  sectionState.area=area; sectionState.questions=shuffle(sectionTests[area]); sectionState.index=0; sectionState.score=0; sectionState.answered=false;
  const quiz=document.getElementById("sectionTestArea"); quiz.classList.add("active"); quiz.scrollIntoView({behavior:"smooth",block:"start"}); showSectionQuestion();
}
function showSectionQuestion(){
  const q=sectionState.questions[sectionState.index]; const box=document.getElementById("sectionTestArea");
  box.innerHTML=`<div class="test-header"><span>Section test</span><strong>${esc(sectionState.area)}</strong><small>Question ${sectionState.index+1} of ${sectionState.questions.length}</small></div><h3>${esc(q.q)}</h3><div id="sectionOptions" class="options"></div>`;
  q.options.forEach((o,i)=>{ const b=document.createElement("button"); b.className="quiz-option"; b.textContent=o; b.onclick=()=>answerSection(i); document.getElementById("sectionOptions").appendChild(b); });
}
function answerSection(selected){
  if(sectionState.answered)return; sectionState.answered=true; const q=sectionState.questions[sectionState.index]; const correct=selected===q.answer; if(correct)sectionState.score++; recordWeak("Section test", q.q, sectionState.area, correct);
  document.querySelectorAll("#sectionOptions .quiz-option").forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");if(i===selected&&!correct)b.classList.add("wrong");});
  const box=document.getElementById("sectionTestArea"); box.insertAdjacentHTML("beforeend",`<div class="quiz-result"><strong>${correct?'Correct':'Not quite'}</strong><p>${esc(q.explain)}</p></div>`);
  const n=document.createElement("button"); n.className="primary"; n.textContent=sectionState.index===sectionState.questions.length-1?"Finish section test":"Next question"; n.onclick=()=>{ if(sectionState.index===sectionState.questions.length-1)finishSectionTest(); else {sectionState.index++;sectionState.answered=false;showSectionQuestion();} }; box.appendChild(n);
}
function finishSectionTest(){
  const pct=Math.round(sectionState.score/sectionState.questions.length*100); const scores=JSON.parse(localStorage.getItem(sectionScoreKey)||"{}"); scores[sectionState.area]=pct; localStorage.setItem(sectionScoreKey,JSON.stringify(scores));
  document.getElementById("sectionTestArea").innerHTML=`<h3>${esc(sectionState.area)} complete</h3><p>You scored <strong>${sectionState.score}/${sectionState.questions.length}</strong> (${pct}%).</p><p>${pct>=80?'Good. Move on, but revisit anything you could not explain.':'Diagnostic done. Revisit this section before moving on.'}</p><button class="primary" id="retrySection">Try again</button>`;
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
