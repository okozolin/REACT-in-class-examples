import { observable, action, runInAction, configure } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  @observable githubProjects = [];
  @observable state = "pending"; // "pending" / "done" / "error"

  @action
  fetchProjects() {
    this.githubProjects = [];
    this.state = "pending";
    fetchGithubProjectsSomehow().then(
      projects => {
        const filteredProjects = somePreprocessing(projects);
        // put the 'final' modification in an anonymous action
        runInAction(() => {
          this.githubProjects = filteredProjects;
          this.state = "done";
        });
      },
      error => {
        // the alternative ending of this process:...
        runInAction(() => {
          this.state = "error";
        });
      }
    );
  }
}
