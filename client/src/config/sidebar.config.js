import {InboxOutlined,StarOutlined,SendSharp,InsertDriveFileOutlined, DeleteOutline,MailOutline} from "@mui/icons-material"

export const SIDEBAR_DATA = [
    {
        name:'inbox',
        title:'Inbox',
        icon : InboxOutlined
    },
    {
        name:'starred',
        title:'Starred',
        icon : StarOutlined
    },
    {
        name:'sent',
        title:'Sent',
        icon : SendSharp
    },
    {
        name:'drafts',
        title:'Drafts',
        icon : InsertDriveFileOutlined
    },
    {
        name:'bin',
        title:'Bin',
        icon : DeleteOutline
    },
    {
        name:'allmail',
        title:'All Mails',
        icon : MailOutline
    },
]