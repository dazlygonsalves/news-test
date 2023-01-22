import { Layout } from "./layouts";
import { Home } from "./pages/Home";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
