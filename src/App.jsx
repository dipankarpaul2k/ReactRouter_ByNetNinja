// Imports from "react-router-dom"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Import pages
import {
  Home,
  About,
  Faq,
  Contact,
  NotFound,
  Careers,
  CareerDetails,
  CareerError,
} from "./pages";

// Import layout
import { RootLayout, HelpLayout, CareersLayout } from "./layouts";

// Import loader functions
import { careersLoader, careerDetailsLoader } from "./pages/careers/loaderFns";

// Import action handlers
import contactFormAction from "./pages/help/contactActionFn";

// Create route function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Main pages */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* Help routes */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route
          path="contact"
          element={<Contact />}
          action={contactFormAction}
        />
      </Route>

      {/* Careers route */}
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      {/* Error page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// Export App function
function App() {
  return <RouterProvider router={router} />;
}

export default App;
