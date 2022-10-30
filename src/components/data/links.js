import { FiUser  } from "react-icons/fi";
import { MdForum, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { FaPoll } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import React from 'react'


export const orderLinks = [
    {
        role: 'admin', 
        name: 'Dashboard',
        url: 'dashboard',
        icon: <MdOutlineDashboardCustomize />,
        },
        {
            role: 'user',
            name: 'Comments',
            url: 'comments',
            icon: <FiUser />
        }, 
        {
            role: 'user',
            name: 'Forums',
            url: 'forums',
            icon: <MdForum />,
          },
          {
            role: 'admin',
            name: 'Create Forum',
            url: 'createforums',
            icon: <RiChatNewFill />,
          },
          {
            role: 'admin',
            name: 'Create Poll', 
            url: 'createpoll',
            icon: <FaPoll />
        }, 
        {
            role: 'admin',
            name: 'Feedback', 
            url: 'feedback',
            icon: <VscFeedback />
        }, 

]

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
            role: 'admin', 
            name: 'Dashboard',
            url: 'dashboard',
            icon: <MdOutlineDashboardCustomize />,
            },
        ],
    },
    {
        title: 'Comments',
        links: [
            {
                role: 'user',
                name: 'Comments',
                url: 'comments',
                icon: <FiUser />
            }, 
        ]
    }, 
    {
        title: 'Forums',
        links: [
          {
            role: 'user',
            name: 'Forums',
            url: 'forums',
            icon: <MdForum />,
          },
          {
            role: 'admin',
            name: 'Create Forum',
            url: 'createforums',
            icon: <RiChatNewFill />,
          },

        ],
    },
    {
        title: 'Polls',
        links: [
            {
                role: 'admin',
                name: 'Create Poll', 
                url: 'createpoll',
                icon: <FaPoll />
            }, 
        ]
    },
    {
        title: 'Feedback',
        links: [
            {
                role: 'admin',
                name: 'Feedback', 
                url: 'feedback',
                icon: <VscFeedback />
            }, 
        ]
    },

]