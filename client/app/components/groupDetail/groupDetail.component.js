import template from "./groupDetail.html";
import controller from "./groupDetail.controller";
import "./groupDetail.styl";

let groupDetailComponent = {
  bindings: {
    groupData: "<",
    stores: "<"
  },
  template,
  controller,
  restrict: ""
};

export default groupDetailComponent;
