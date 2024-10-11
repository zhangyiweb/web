/*
 * @Descripttion: 
 * @Date: 2022-04-27 17:42:23
 */
/*
 * @Descripttion: 
 * @Date: 2021-12-31 10:00:02
 */
export default ({
  namespaced: true,
  state: {
    name: '123'
  },
  mutations: {
    NAME: (state, newValue) => {
      state.name = newValue
    }
  },
  actions: {
    setName: (ctx, value) => {
      console.log(111);
      ctx.commit('NAME', value)
    }
  },
})