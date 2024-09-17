import React, { useState } from 'react';
import { FaUser, FaBox, FaHeart, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

function Nav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`fixed top-0 left-0 h-full ${expanded ? 'w-48' : 'w-10'} bg-slate-900 transition-all duration-300`} 
      onMouseEnter={() => setExpanded(true)} 
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        <NavItem icon={<FaUser />} label="Profile" expanded={expanded} />
        <NavItem icon={<FaBox />} label="Order" expanded={expanded} />
        <NavItem icon={<FaHeart />} label="Wishlist" expanded={expanded} />
        <NavItem icon={<FaCog />} label="Setting" expanded={expanded} />
        <NavItem icon={<FaQuestionCircle />} label="Help Centre" expanded={expanded} />
        <NavItem icon={<FaSignOutAlt />} label="Logout" expanded={expanded} />
      </div>
    </div>
  );
}

function NavItem({ icon, label, expanded }) {
  return (
    <div className="flex items-center space-x-2 text-white cursor-pointer hover:bg-slate-800 w-full p-2 rounded-lg">
      {icon}
      {expanded && <span className="whitespace-nowrap">{label}</span>}
    </div>
  );
}

export default Nav;
