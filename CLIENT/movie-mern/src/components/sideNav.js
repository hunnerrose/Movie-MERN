// import SideNav, {
//   // Toggle,
//   // Nav,
//   NavItem,
//   NavIcon,
//   NavText,
// } from "@trendmicro/react-sidenav";
// import SideBar from "./sideBar";

// import "@trendmicro/react-sidenav/dist/react-sidenav.css";

// function navBar({ query, setQuery }) {
//   return (
//     <SideNav onSelect={(selected) => {}}>
//       <SideNav.Toggle />
//       <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//           <NavIcon>
//             <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
//           </NavIcon>
//           <NavText>
//             <SideBar query={query} setQuery={setQuery} />
//           </NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//           <NavIcon>
//             <i
//               className="fa fa-fw fa-line-chart"
//               style={{ fontSize: "1.75em" }}
//             />
//           </NavIcon>
//           <NavText>Movies</NavText>
//           <NavItem eventKey="charts/recentlyAdded">
//             <NavText>Recently Added</NavText>
//           </NavItem>
//           <NavItem eventKey="charts/upcoming">
//             <NavText>Popular Movies</NavText>
//           </NavItem>
//         </NavItem>
//       </SideNav.Nav>
//     </SideNav>
//   );
// }

// export default navBar;
