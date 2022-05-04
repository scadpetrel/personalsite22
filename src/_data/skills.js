const coding = { name: 'Coding languages:', list: 'HTML, CSS, Sass, Javascript, Bootstrap, Node.js, React, PHP' }
const database = { name: 'Database:', list: 'SQL, Mongo, MySQL(basic), Oracle(basic)' }
const software = { name: 'Software and Services:', link: 'Wordpress, VSCode, Amazon Web Services (AWS), Github, GitLab, Shopify, Google Analytics, Adobe XD, Adobe Photoshop, Capture One, Canva'}
const productivity = { name: 'Productivity Tools:', link: 'Google Workspace, Slack, Basecamp, Trello, Asana, Teamwork'}

module.exports = () => {
  return [
    coding,
    database,
    software,
    productivity
  ]
}