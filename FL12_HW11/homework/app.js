const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

let treeNode = document.getElementById('root');
treeView(structure, treeNode);

function treeView(structure, node) {
  let parent = document.createElement('ul');
  node.appendChild(parent);
  for (let item of structure) {
    let child = document.createElement('li');
    parent.appendChild(child);
    let block = document.createElement('div');
    child.appendChild(block);
    let newItem = document.createElement('i');
    newItem.classList.add('material-icons');
    let title = document.createElement('span');
    block.appendChild(newItem);
    block.appendChild(title);
    title.innerHTML = item.title;
    if (item.folder) {
      block.classList.toggle('folder');
      newItem.innerHTML = 'folder';
      block.addEventListener('click', function () {
        if (newItem.innerHTML === 'folder') {
          newItem.innerHTML = 'folder_open';
        } else {
          newItem.innerHTML = 'folder';
        }
        child.querySelector('.closed').classList.toggle('opened');
      });
      if (item.children) {
        treeView(item.children, child);
      } else {
        let emptyFolder = document.createElement('div');
        emptyFolder.classList.add('folder_empty', 'closed');
        emptyFolder.innerHTML = 'Folder is empty';
        child.appendChild(emptyFolder);
      }
    } else {
      child.classList.toggle('file');
      newItem.innerHTML = 'insert_drive_file';
    }
  }
  if (parent.parentNode !== treeNode) {
    parent.classList.toggle('closed');
  }
}