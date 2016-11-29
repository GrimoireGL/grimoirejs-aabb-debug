const gr = require('grimoirejs').default;

gr.registerComponent('AABB', {
  attributes: {
    color: {
      defaultValue: 'black',
      converter: 'Color3',
    },
  },
  $mount() {
    const aabb = this.node.getComponent('MeshRenderer')._geometry.aabb;
    this.node.append(`<mesh
      position="${aabb.Center}"
      scale="${aabb.pointLBF.subtractWith(aabb.pointRTN).multiplyWith(0.5).rawElements.map((v) => Math.abs(v)).join(',')}"
      geometry="cube"
      color="${this.getValue('color').toString()}"
      targetBuffer="wireframe"
      />`);
  },
});
