import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { WorksList } from "./components/WorksList/WorksList";
import { Technologies } from "./components/Technologies/Technologies";
import { DevExperience } from "./components/DevExperience/DevExperience";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <Main />
        <div className={styles.middleContent}>
          <div className={styles.bgCode} />
          <About />
          <WorksList />
          <Technologies />
          <DevExperience />
        </div>
        <Footer />
      </div>
    </>
  );
};
