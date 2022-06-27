import './App.css';
import AppLayout from './AppLayout';
import Welcome from './Welcome';
import AppBar from './AppBar';
function Index() {
  return (
    <AppLayout >
      <AppBar/>
      <Welcome/>
    </AppLayout>
  );
}

export default Index;
