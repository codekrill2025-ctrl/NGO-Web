export type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: Array<{ label: string; href?: string; rightArrow?: boolean }>;
};

export const navItems: NavItem[] = [
  {
    id: "about",
    label: "About Us",
    children: [
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],
  },
  {
    id: "work",
    label: "Our Work",
    children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],
  },


  {
   id: "campaigns",
    label: "Campaigns",
    children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],
  },
  { 
    id: "get", label: 
    "Get Involved",
    children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],
  },
  { 
    id: "media",
     label: "Media Centre",
    children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],},
  {
    id: "resource",
    label: "Resource Center",
   children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],
  },
  { 
    id: "contact",
    label: "Contact Us",
    children:[
      { label: "About Us", href: "#about" },
      { label: "People Behind Smile", href: "#people", rightArrow: true },
      { label: "Reach & Presence", href: "#reach" },
      { label: "Civic Driven Change", href: "#civic" },
      { label: "Smilestones", href: "#smilestones" },
      { label: "Good Governance", href: "#governance" },
    ],},
];