export const manifest = {
  screens: {
    scr_8kxp0a: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_u74awc: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_h1otxn: { name: "Skills", route: "/skills", position: { "x": 2960, "y": 220 } },
    scr_gns4du: { name: "Projects", route: "/projects", position: { "x": 4360, "y": 220 } },
    scr_gp486e: { name: "Achievements", route: "/achievements", position: { "x": 160, "y": 2200 } },
    scr_fd615a: { name: "Career Progress", route: "/career", position: { "x": 1560, "y": 2200 } },
    scr_axhmw6: { name: "Goals", route: "/goals", position: { "x": 2960, "y": 2200 } },
    scr_5ns2ls: { name: "Contact", route: "/contact", position: { "x": 160, "y": 4180 } }
  },
  sections: {
    sec_m7tsi9: { name: "Core Portfolio", x: 0, y: 0, width: 5720, height: 1180 },
    sec_9meo0b: { name: "Career Development", x: 0, y: 1980, width: 4320, height: 1180 },
    sec_77gg5s: { name: "Engagement", x: 0, y: 3960, width: 1520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_m7tsi9", children: [
    { kind: "screen", id: "scr_8kxp0a" },
    { kind: "screen", id: "scr_u74awc" },
    { kind: "screen", id: "scr_h1otxn" },
    { kind: "screen", id: "scr_gns4du" }]
  },
  { kind: "section", id: "sec_9meo0b", children: [
    { kind: "screen", id: "scr_gp486e" },
    { kind: "screen", id: "scr_fd615a" },
    { kind: "screen", id: "scr_axhmw6" }]
  },
  { kind: "section", id: "sec_77gg5s", children: [
    { kind: "screen", id: "scr_5ns2ls" }]
  }]

};