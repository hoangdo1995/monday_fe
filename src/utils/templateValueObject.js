const integrateName = {
    'slack':'Slack',
    'jira':'Jira',
    'drive':'Google Drive',
    'gmail':'Gmail',
    'outlook':'Outlook',
    'zendesk':'Zendesk',
    'salesforce':'Salesforce',
    'teams':'Teams',
    'adobe':'Adobe',
    'dropbox':'Dropbox',
    'facebook_ads':'Facebook ads',
    'linkedin':'LinkedIn',
    'google_calendar':'Google Calendar'
}

// demo dử liệu cho template object
const templateObject = [
    {
        name:'Basic project management',
        author:'monday.com',
        type:'',
        listIntegrate:['slack','jira','drive','gmail','outlook'],
        shortDesc:'Plan and manage your project from A to Z',
        desc:'Keep track of all tasks required for your project & make sure nothing falls through the cracks',
        panelImage:'https://dapulse-res.cloudinary.com/image/upload/v1678786651/template_center/project_management/basic_project_management/thumbnail/project_plan_thumb.png',
        downloadCount:'59.5K'
    },
    {
        name:'IT service desk',
        author:'monday.com',
        type:'',
        listIntegrate:['jira','slack','gmail','teams','zendesk','salesforce'],
        shortDesc:'Manage IT requests and incidents with a centralized system.',
        desc:'Manage IT requests, changes, problems, and incidents using an intuitive ticketing system and ITSM tools to address organizational needs more efficiently.',
        panelImage:'https://dapulse-res.cloudinary.com/image/upload/template_center/office_operations/it_requests/screenshots%20/it_requests_first.png',
        downloadCount:'35.3K'
    },
    {
        name:'Social media planner',
        author:'monday.com',
        type:'',
        listIntegrate:['facebook_ads','google_calendar','drive','gmail','adobe','dropbox'],
        shortDesc:'Create, schedule, and design all social media content in one place',
        desc:'Create, schedule, and design all social media content in one visual workspace. Organize your upcoming content by platform, publish date, status, and more.',
        panelImage:'https://dapulse-res.cloudinary.com/image/upload/template_center/marketing/social_media_planner/screenshots/social_media_planner_first.png',
        downloadCount:'110.6K'
    },
    {
        name:'Single Marketing Project',
        author:'monday.com',
        type:'',
        listIntegrate:['gmail','outlook','dropbox','linkedin','google_calendar','slack','drive','teams'],
        shortDesc:'',
        desc:'This template can be used as a low-level project board to help you plan and track everything that needs to be done to complete your project in one place! With 6 views, automations, and due date reminders, your whole team will stay on top of your project all the way through. The Kanban View lets you manage your project at a glance, and the Gantt View will help you visualize the progression of your project to help you better manage deadlines.',
        panelImage:'https://dapulse-res.cloudinary.com/image/upload/v1613556336/Solution%20set/Single%20Marketing%20Project/Single_Marketing_Project_board.png',
        downloadCount:'21.4K'
    },
    

]

export {integrateName,templateObject};