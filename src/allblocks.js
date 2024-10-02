const blocks = [
  // Definitions of all blocks available
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [0, 2]
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2]
  ],
  [
    [0, 1],
    [0, 0],
    [1, 0],
    [2, 0]
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3]
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2]
  ],
  [
    [2, 0],
    [1, 0],
    [1, 1],
    [0, 1]
  ]
]

export function getRandom () {
  return blocks[Math.floor(Math.random() * 7)]
}
