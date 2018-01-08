(() => {

const DropZone = g.skin.DropZone

g.unit.Uploader = {
  build: buildUploader
}

function buildUploader () {
  return (
    DropZone.render({
      helpMessage: 'drag and drop files here',
      helpMessageDrop: 'drop files to start upload'
    })
  )
}

})()
