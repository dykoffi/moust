export default class HomeService {
  constructor() {}

  /**
   * Hello
   */
  public async Hello() {
    return {
      name: "moust",
      version: "1.0.0",
      description: "",
      message: "It's work very well. Go to /docs to see documentation",
    };
  }
}
