# ♻️ Reprint: The Recycled 3D Printer (Capstone Project)

> **Team Reprint | Group 21216**
> **Obour STEM School | Grade 11 | Semester 1 (2025/2026)**

![Project Banner](https://via.placeholder.com/1000x300?text=Reprint+Project+Banner) 

## 📜 Abstract
Egypt faces a sharp increase in electronic waste. **Reprint** addresses this by diverting hazardous e-waste from landfills and repurposing it into a functional scientific tool. We designed and built a **Prusa-style Cartesian 3D printer** using **70% recycled components** (scavenged from obsolete inkjet printers, scanners, and PCs) and a custom-milled 18mm wooden frame.

Our testing proves that "waste" can be transformed into a high-precision fabrication tool for school laboratories at a fraction of the commercial cost.

## 👥 The Team: Reprint
* **Hamza Mahmoud**
* **Mohamed Amer**
* **Mostafa Rashad**
* **Yousef Ahmed**

---

## 🚀 Key Features
* **Eco-Friendly:** Built using salvaged NEMA 17 motors, smooth rods, cabling, and ATX power supply.
* **Cost-Effective:** Total build cost is **~70% lower** than market equivalents.
* **Robust Frame:** 18mm Synthetic Wood frame for superior vibration dampening.
* **Safety First:** External **MKS MOS25 V2.0 MOSFET** for the heated bed to prevent mainboard burnout.
* **High Precision:** Achieved dimensional accuracy with **<1.8% error rate**.

---

## 🛠️ Bill of Materials (BOM)
| Component | Source | Status |
| :--- | :--- | :--- |
| **Stepper Motors (NEMA 17)** | Scavenged (Old Printers) | ♻️ Recycled |
| **Power Supply (ATX 20A)** | Scavenged (Old PC) | ♻️ Recycled |
| **Smooth Rods & Cabling** | Scavenged (Scanners/Printers) | ♻️ Recycled |
| **Frame (18mm Polywood)** | Custom Milled | 🪵 New |
| **Controller** | Arduino Mega 2560 + RAMPS 1.4 | ⚙️ New/Repaired |
| **Heated Bed** | MK3 Dual Power (12V) | ⚙️ New |
| **Hotend** | E3D V6 (Bowden) | ⚙️ New |
| **Power Safety** | MKS MOS25 V2.0 MOSFET | 🛡️ Safety Upgrade |

---

## ⚙️ Technical Configuration

### 1. Firmware (Marlin 2.0.x)
We configured a specific version of Marlin to handle the scavenged hardware and M5 threaded rods.

**Key `Configuration.h` Settings:**
```cpp
// Thermal Safety (Standard V6 PTFE protection)
#define HEATER_0_MAXTEMP 260 

// Sensor Definitions (100k Beta 3950)
#define TEMP_SENSOR_0 11
#define TEMP_SENSOR_BED 11

// Steps Per MM (Calibrated for M5 Threaded Rods on Z)
// X/Y = GT2 Belt, Z = M5 Rod, E = E3D V6
#define DEFAULT_AXIS_STEPS_PER_UNIT   { 80, 80, 4000, 93 }

// Z-Axis Speed Limit (To prevent M5 rod stalling)
#define DEFAULT_MAX_FEEDRATE          { 300, 300, 2, 25 }

// Endstop Logic (For Standard LED Modules)
#define X_MIN_ENDSTOP_INVERTING false

```

### 2. Wiring & Safety

* **Heated Bed:** Wired via an external **MKS MOSFET** to offload high current from the RAMPS board.
* *Signal Pin:* RAMPS **D8** -> MOSFET **Sig**.
* *Power:* PSU -> MOSFET -> Bed.


* **Power Loss Recovery:** Enabled in `Configuration_adv.h` (Software Mode) to resume prints after power cuts.

---

## 📊 Performance Results

Based on our systematic testing (Calibration Cube & Temperature Stress Test):

| Metric | Result | Notes |
| --- | --- | --- |
| **Dimensional Accuracy** | **±1.8%** | X: +0.36mm, Y: -0.32mm, Z: +0.32mm |
| **Hotend Stability** | **200°C ±0.5°C** | Reached temp in 90 seconds |
| **Bed Stability** | **60°C ±1.0°C** | Reached temp in 210 seconds |
| **MOSFET Temp** | **Max 35°C** | Well below safety limit of 40°C |
| **Print Speed** | **60mm/s** | Optimal balance of speed vs. quality |

---

## 🔮 Future Improvements

1. **Aluminum Extrusion Frame:** For even better fire resistance and rigidity.
2. **OctoPrint (Raspberry Pi):** To enable remote WiFi monitoring and printing.
3. **Filament Runout Sensor:** To pause prints automatically when filament ends.

---

## 🙏 Acknowledgements

Special thanks to **Dr. Ahmed Abd Elmaksoud**, **Mr. Ahmed Morsi**, **Mrs. Shaimaa**, **Mrs. Ebtihal**, and **Mr. Gad (Fab Lab)** for their guidance and support.

---

*© 2025 Team Reprint. Open Source Hardware.*

```

```
