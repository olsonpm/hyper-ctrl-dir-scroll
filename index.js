'use strict'

//
//------//
// Main //
//------//

const decorateTerms = (Terms, { React }) => {
  return class CtrlDirScroll_Terms extends React.Component {
    constructor(props, context) {
      super(props, context)

      bindAll(this, [
        'handleScrollLineDown',
        'handleScrollLineUp',
        'onDecorated',
      ])

      this.commands = {
        'ctrl-dir-scroll:scroll-line-down': this.handleScrollLineDown,
        'ctrl-dir-scroll:scroll-line-up': this.handleScrollLineUp,
      }
    }

    onDecorated(termsInst) {
      this.termsInst = termsInst
      termsInst.registerCommands(this.commands)
      if (this.props.onDecorated) {
        this.props.onDecorated(termsInst)
      }
    }

    handleScrollLineDown() {
      const termComponent = this.termsInst.getActiveTerm()
      if (termComponent) termComponent.term.scrollLines(1)
    }

    handleScrollLineUp() {
      const termComponent = this.termsInst.getActiveTerm()
      if (termComponent) termComponent.term.scrollLines(-1)
    }

    render() {
      return <Terms onDecorated={this.onDecorated} {...this.props} />
    }
  }
}

const decorateKeymaps = keymaps => {
  return Object.assign(
    {},
    {
      'ctrl-dir-scroll:scroll-line-up': 'ctrl+up',
      'ctrl-dir-scroll:scroll-line-down': 'ctrl+down',
    },
    keymaps
  )
}

//
//------------------//
// Helper Functions //
//------------------//

function bindAll(obj, methodNames) {
  methodNames.forEach(fnName => {
    obj[fnName] = obj[fnName].bind(obj)
  })
}

//
//---------//
// Exports //
//---------//

module.exports = {
  decorateKeymaps,
  decorateTerms,
}
