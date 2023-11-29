import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda deserunt culpa debitis perferendis ipsum reprehenderit impedit explicabo velit repellat rerum iste nobis nostrum temporibus, eos architecto ipsam necessitatibus aut accusantium harum. Magnam nobis rerum quaerat praesentium sit. Nam exercitationem asperiores eum facilis dolores veniam similique reiciendis tempora hic laboriosam.
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum iure laborum ab ipsa in, repellat eum, modi consectetur accusamus totam quod facere itaque nesciunt libero odit suscipit placeat aspernatur soluta.</p>

      <nav>
        <NavLink to="faq">View the FAQs</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
