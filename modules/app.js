class App {
  constructor( container ) {

    this.layer = new Layer( container )
    this.scrambelText = new ScrambelText( )

    this.maxInterval = 40
    this.lastUpdate = 0
    this.deltaTime = 0

    requestAnimationFrame( timestamp => this.loop( timestamp ) )

  }

  update() {
    this.scrambelText.update( this.deltaTime )
  }
  render() {
    this.scrambelText.render( this.layer )
  }
  loop( currentTime ) {

    requestAnimationFrame( timestamp => this.loop( timestamp ) )

    this.deltaTime = currentTime - this.lastUpdate
    this.lastUpdate = currentTime

    if ( this.deltaTime > this.maxInterval ) return

    this.update()
    this.render()

  }
}

onload = () => new App