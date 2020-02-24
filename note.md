## 虚拟 DOM 原理

- DOM 的渲染过程，创建 DOM 树，创建 Style Rules，关联 DOM 树和样式表，创建 Render Tree，Layout，Painting

- DOM 详细过程， HTML 解析器解析 HTML 代码，生成 DOM 树，CSS 解析器解析 CSS 代码，生成语法规则，关联语法规则和 DOM 树，生成 Render Tree，Paint

- virtual-dom(后文简称 vdom)的概念大规模的推广还是得益于 react 出现，virtual-dom 也是 react 这个框架的非常重要的特性之一。相比于频繁的手动去操作 dom 而带来性能问题，vdom 很好的将 dom 做了一层映射关系，进而将在我们本需要直接进行 dom 的一系列操作，映射到了操作 vdom，而 vdom 上定义了关于真实 dom 的一些关键的信息，vdom 完全是用 js 去实现，和宿主浏览器没有任何联系，此外得益于 js 的执行速度，将原本需要在真实 dom 进行的创建节点,删除节点,添加节点等一系列复杂的 dom 操作全部放到 vdom 中进行，这样就通过操作 vdom 来提高直接操作的 dom 的效率和性能。

- 通过 diff 算法，获取节点的变化情况，将变化的 DocumentFragment 一次性更新

## Vue 生命周期

    Vue.prototype._init = function(options) {
      initLifecycle(vm)
      initEvents(vm)
      initRender(vm)
      callHook(vm, 'beforeCreate') // 拿不到 props data
      initInjections(vm)
      initState(vm)
      initProvide(vm)
      callHook(vm, 'created')
    }

- beforeCreate
  - 初始化生命周期，时间，渲染器
- created
  - 初始化注入，props，state，provider
- beforeMount
  - 按模板渲染字符串，Vue 的占位符还有其他属性都会直接挂载到页面上面，没有替换
- mounted
  - 页面渲染完成，HTML 页面占位符等替换完成
- beforeUpdate
  - 数据已经更新，但是没有反应到 DOM 上面
- updated
  - 数据更新，并且已经返回到 DOM 上面
- beforeDestoy
  - 组件销毁之前，这个钩子阶段，Vue 实例全部可用，这个钩子时候，会销毁组件的 watcher，子组件，事件绑定等
- destroyed
  - 组件销毁之后调用的钩子
