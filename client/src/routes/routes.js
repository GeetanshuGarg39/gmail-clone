import { lazy } from "react"

const Main= lazy(() => import("../pages/Main") )
const Emails= lazy(() => import("../components/Emails") )
const viewEmails= lazy(() => import("../components/ViewEmails") )

export const routes = {
    main:{
        path:'/',
        element:Main
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    view:{
        path:'/view',
        element:viewEmails
    },
    invalid:{
        path:'/*',
        element: Emails
    }
}