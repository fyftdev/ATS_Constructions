import {
  Building2,
  HardHat,
  Wrench,
  Flame,
  Layers,
  Shield,
  Hammer,
  Pipette,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  n: string;
  icon: LucideIcon;
  title: string;
  short: string;
  intro: string;
  why: string;
  capabilities: string[];
  deliverables: string[];
  closing: string;
};

export const services: Service[] = [
  {
    id: "general-construction",
    n: "01",
    icon: Building2,
    title: "General Construction",
    short: "End-to-end build delivery for commercial and mixed-use developments.",
    intro:
      "From foundations to fit-out, AtS runs general construction as a single accountable workflow. One senior engineer carries the build from groundbreaking to handover.",
    why: "Without a single accountable main contractor, builds fragment across trades — costs balloon, schedules slip, and defects fall through cracks. Owning every layer is what makes a programme hold.",
    capabilities: [
      "Main contracting for commercial, industrial and mixed-use",
      "Substructure, superstructure and facade integration",
      "On-site QA documented per element, signed by a senior",
      "Programme control with weekly client reporting",
    ],
    deliverables: [
      "BCA-compliant build with complete as-built documentation",
      "Defects-liability cover with senior engineer on-call",
      "Handover dossier including warranties and O&M manuals",
    ],
    closing:
      "If the scope can be drawn, planned and built — we will deliver it on a programme you can hold us to.",
  },
  {
    id: "infrastructure",
    n: "02",
    icon: Layers,
    title: "Infrastructure Works",
    short: "Civil, structural and utility infrastructure built to Singapore standards.",
    intro:
      "Roads, drainage, retaining structures, sewer and utility corridors. The unglamorous work that everything else depends on — and that we treat with the same seriousness as the showpiece.",
    why: "Roads, drainage and utility corridors are the silent backbone. Get them wrong and every superstructure above pays the price for fifty years.",
    capabilities: [
      "Earthworks, ground improvement and shoring",
      "RC structural works and precast integration",
      "Storm and sewer drainage to PUB standards",
      "Utility trenching and conduit corridors",
    ],
    deliverables: [
      "Surveyed as-built drawings",
      "Compaction, concrete and weld test reports",
      "Authority submission and approval support",
    ],
    closing:
      "Infrastructure is judged by what it does for fifty years, not fifty days. We build accordingly.",
  },
  {
    id: "mechanical-piping",
    n: "03",
    icon: Wrench,
    title: "Mechanical",
    short:
      "Mechanical works for structure and piping entail the design, fabrication, and installation of the foundational skeletons and fluid pathways within industrial facilities.",
    intro:
      "The mechanical completion of an industrial facility is built on two core pillars: structural steel and process piping. Structural works provide physical support, while piping fabrication ensures precise, leak-proof systems for transporting liquids and gases under extreme conditions.",
    why: "Structural components bear the weight of heavy machinery, equipment, and catwalks, while piping acts as the 'veins and arteries' of the plant, transporting steam, acids, water, or pressurized gases. Rigorous load-bearing calculations and tight jointing specifications are mandatory.",
    capabilities: [
      "Structural Steel Fabrication (cutting, drilling, and welding in a workshop environment according to detailed engineering and shop drawings)",
      "Structural Erection & Alignment (components transported to site and assembled securely using heavy cranes, leveling matrices, and strict safety tolerances)",
      "Piping Fabrication split into highly controlled shop spools and precision on-site field tie-ins (measuring, cutting, beveling, fit-up, and welding code verification)",
      "Piping Erection & Installation (prefabricated pipe spools carefully lifted and connected to equipment, valves, and supports according to isometric drawings)",
      "Strict implementation of Welding Procedure Specifications (WPS) and structural design guidelines",
    ],
    deliverables: [
      "Structural integrity assessments and complex load-bearing load calculation maps",
      "Fabricated process piping spools and custom isometric general arrangement plan layouts",
      "Non-Destructive Testing (NDT) structural validation records: Visual (VT), Radiographic (RT), and Ultrasonic (UT) testing files",
      "Surface and near-surface joint logs: Magnetic Particle (MT) and Liquid Penetrant (PT) internal defect assessments",
      "Hydrostatic or pneumatic pressure leak-tightness operational handover certification reports",
    ],
    closing:
      "Rigorous mechanical engineering systems designed, tested, and certified for risk-free industrial handovers.",
  },
  {
    id: "structural-fabrication",
    n: "04",
    icon: Hammer,
    title: "Structural Fabrication",
    short:
      "Workshop fabrication of structural steel — cut, drilled, welded and primed to shop drawings.",
    intro:
      "Our fabrication yard turns engineering drawings into ready-to-erect structural steel: columns, beams, trusses, platforms and pipe racks. Every member is cut, drilled, welded and surface-prepared under controlled conditions before it leaves the gate.",
    why: "Site welding is slow, expensive and harder to inspect. Shifting fabrication into a controlled shop environment buys you speed, repeatability and weld quality you can actually verify before erection.",
    capabilities: [
      "Heavy and light structural steel fabrication to shop drawings",
      "Plate work, gussets, base plates and stiffeners",
      "Certified welders qualified to AWS / ASME procedures",
      "Surface prep — blasting, priming and protective coating",
      "Pre-assembly trial fits for complex modules",
    ],
    deliverables: [
      "Fully welded and coated structural members tagged for erection",
      "Welder qualification register and weld inspection records (VT, MT, UT)",
      "Mill test certificates and material traceability per piece",
      "Dimensional check reports and shipping manifests",
    ],
    closing:
      "Steel that arrives on site straight, square and ready to bolt — so erection moves as fast as the crane can lift.",
  },
  {
    id: "refinery-plant",
    n: "05",
    icon: Flame,
    title: "Refinery & Plant",
    short: "Construction and turnaround support for oil, gas and process facilities.",
    intro:
      "Process plant work is unforgiving. Tolerances are tight, downtime is expensive, and safety is non-negotiable. AtS staffs each shutdown with engineers who have lived through dozens of them.",
    why: "Process plants lose six- and seven-figure sums for every day of unplanned downtime. Disciplined turnaround crews who have done it before are the only acceptable answer.",
    capabilities: [
      "Greenfield process unit construction",
      "Brownfield tie-ins and capacity expansions",
      "Planned turnarounds with shift-based crews",
      "Hot-tap and on-stream interventions",
    ],
    deliverables: [
      "Per-task method statements and JSAs",
      "Material traceability for every spool and weld",
      "Hand-back package signed by client engineer",
    ],
    closing: "Plants do not wait. We arrive over-staffed and leave on schedule.",
  },
  {
    id: "pipeline",
    n: "06",
    icon: Wrench,
    title: "Engineering , procurement and construction (EPC)",
    short: "Pipeline laying, fabrication and pressure-tested commissioning.",
    intro:
      "Process and utility pipelines, on-plot and cross-country. Welded by qualified hands, NDT-tested, and pressure-tested before they are buried, jacketed or insulated.",
    why: "A pipeline that fails inspection is buried cost; a pipeline that fails in service is a safety incident. NDT and traceability are non-negotiable.",
    capabilities: [
      "Carbon and stainless pipework fabrication",
      "GRP, HDPE and dual-laminate piping",
      "Cathodic protection and coatings",
      "Hydrostatic, pneumatic and helium leak testing",
    ],
    deliverables: [
      "Welder qualification register and weld map",
      "Full NDT package (UT, RT, PT, MT)",
      "Commissioning records and tie-in dossier",
    ],
    closing: "Pipework that holds pressure today and twenty years from now.",
  },
  {
    id: "scaffolding-service",
    n: "07",
    icon: Shield,
    title: "Scaffolding Service",
    short:
      "Erection and dismantling of highly regulated temporary elevated platforms engineered for complete site access and safety.",
    intro:
      "Scaffolding erection and dismantling are highly regulated, critical construction processes. Erection is the carefully engineered assembly of temporary elevated platforms for workers and materials, while dismantling follows a strict reverse methodology. Both phases demand competent supervision and unyielding safety standards.",
    why: "Dismantling and erection pose distinct, high-risk hazards. From ground stability checks to top-down tier stripping and implementing falling-object public barriers, strict safety practices dictate every stage of our scaffold sequence.",
    capabilities: [
      "Site Inspection & Planning (assessing ground stability, checking for overhead power lines, and verifying obstructions before assigning competent personnel)",
      "Base Preparation (placing specialized sole boards and robust base plates on the ground to distribute weight evenly and ensure a perfectly level foundation)",
      "Frame Assembly (connecting vertical upright standards and horizontal ledgers systematically, keeping sections fully plumb and level)",
      "Bracing & Platforms (adding diagonal structural braces for rigidity, securing structural planks, and building stairs or ladder access points)",
      "Comprehensive Edge Protection setup (installing safe guardrails, midrails, and protective toe boards to fully mitigate fall hazards)",
    ],
    deliverables: [
      "Final Inspection records and inspector certified safe-to-use structural identification tags",
      "Top-down removal methodology matrices and secure ground-level area exclusion public cordons",
      "Component safety integrity wear-audits checking for corrosion or structural damage prior to sorting and storage",
      "Mandatory fall protection full-body harness utilization manifests and competent scaffold supervisor verification logs",
    ],
    closing:
      "Regulated, certified scaffolding infrastructures built under zero-failure compliance parameters to keep your project moving safely.",
  },
  {
    id: "plant-maintenance",
    n: "08",
    icon: HardHat,
    title: "Plant Maintenance",
    short:
      "Routine inspection, component replacement, diagnostics, and overhauls for mission-critical industrial complexes.",
    intro:
      "Our Plant Maintenance Services ensure continuous, high-efficiency production and asset longevity across sectors that demand zero-failure reliability. We provide end-to-end mechanical diagnostics, overhauls, and compliance testing.",
    why: "Misalignment, fouling, and worn components account for the vast majority of industrial asset failures. Proactive machinery servicing and precision laser calibration are what stop processing bottlenecks before they cause costly emergency shutdowns.",
    capabilities: [
      "Rotating Equipment Servicing (complete overhauls, diagnostics, systematic dismantling, cleaning, and dynamic balancing adjustments for pumps, compressors, turbines, blowers, and gearboxes)",
      "Heat Exchanger Services (fouling mitigation, high-pressure washing, chemical cleaning, mechanical descaling, retubing, and re-gasketing for shell-and-tube or plate configurations)",
      "Pump Replacement & Precision Laser Alignment (safe removal and installation of centrifugal/positive displacement pumps with laser alignment tools matching rotational centrelines)",
      "Valve Replacement & Management (expert field change-outs, installation, and routine servicing of glove, gate, ball, butterfly, and safety relief valves)",
    ],
    deliverables: [
      "QA/QC leak testing and structural pressure integrity verification assessments",
      "Total valve tracking, asset maintenance logs, actuator servicing histories, and pressure calibration certification reports",
      "Dynamic balancing profiles, vibration troubleshooting datasets, and custom mechanical seal or bearing upgrade manifests",
      "Comprehensive multi-sector reliability coverage for: Oil & Gas, Petrochemical, Power Generation, Water Treatment, and Pharmaceutical operations",
    ],
    closing:
      "Precision mechanical maintenance that measurably optimizes thermal efficiency, guarantees fluid control compliance, and extends lifecycle reliability.",
  },
  {
    id: "pipe-fabrication",
    n: "09",
    icon: Pipette,
    title: "Pipe Fabrication Services",
    short:
      "Shop-fabricated pipe spools cut, beveled and welded to isometric drawings — ready for field tie-in.",
    intro:
      "We prefabricate process and utility pipe spools in a controlled shop environment, working straight from isometric drawings. Carbon steel, stainless, alloy and exotic materials — cut, beveled, fit-up, welded and tested before they ship to site.",
    why: "Field welds are the most expensive welds on any project. Maximising shop fabrication shrinks the site critical path, improves weld quality, and de-risks tie-in windows that cannot afford to slip.",
    capabilities: [
      "Spool fabrication from isometrics in carbon, stainless and alloy steels",
      "Cutting, beveling, fit-up and orbital / SMAW / GTAW welding to WPS",
      "Non-destructive examination — RT, UT, PT, MT, hardness and PMI",
      "Hydrostatic and pneumatic pressure testing prior to dispatch",
      "Spool tagging, painting, insulation prep and shipping",
    ],
    deliverables: [
      "Welded and tested pipe spools tagged per isometric line number",
      "Full weld map with welder ID, WPS reference and NDE result per joint",
      "Material traceability and PMI reports for every component",
      "Pressure test certificates and dispatch manifest",
    ],
    closing:
      "Pipework that arrives on site straight, tested and traceable — turning weeks of field welding into days of bolt-up.",
  },
];
