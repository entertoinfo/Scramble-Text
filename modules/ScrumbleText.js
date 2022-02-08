class ScrambelText {

  constructor(words = 'text') {

    this.words = words.match(/\w+/g)

    this.letters = []
    this.counter = 0

    this.chance = .2

    this.delay = 2500
    this.pause = 0

    this.step = 20
    this.accum = 0

    this.from = 32 
    this.to = 126

    this.alpha = 1


  }
  update( deltaTime ) {
    const { words, latters, counter, step, delay, chance, from, to} = this
    const { floor, random} = Math

    this.accum += deltaTime
    this.pause = ( this.pause - deltaTime) % delay
  }
  render({
    ctx,
    w,
    h,
  }) {
    ctx.clearRect(0, 0, w, h, )
    ctx.font = '600 150px PermanentMarker'
    ctx.textAling = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillStyle = 'white'

    ctx.fillText(this.words[0], w / 2, h / 2)

  }
}