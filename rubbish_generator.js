// return a random item from an array
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateRubbish (role) {
  // define roles, tasks, sentences
  const targets = {
    engineer: '工程師',
    designer: '設計師',
    startupper: '創業家'
  }
  const tasks = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    startupper: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const sentences = [
    '很簡單',
    '很容易',
    '很快',
    '很正常',
    '跟呼吸一樣',
    '跟喝水一樣'
  ]
  // be used while role isn't selected
  const rubbishesToALL = [
    '別怕吃虧，吃虧就是佔便宜',
    '公司不賺錢，大家共體時艱吧！',
    '等你們活到我這年紀就知道，想當年...',
    '能者多勞，這是為你們的前途好',
    '薪水低？就當在做功德'
  ]

  const rubbishToAll = sample(rubbishesToALL)

  // return message while role not exist
  if (!role) {
    return `${rubbishToAll}`
  }

  // if role exist, start generating task and sentence for selected role
  const roleSelected = targets[role]
  const task = sample(tasks[role])
  const sentence = sample(sentences)

  // return rubbish
  return `身為${roleSelected}，${task}，${sentence}吧！`
}

module.exports = generateRubbish
