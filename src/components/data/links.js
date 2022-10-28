import { FiUser  } from "react-icons/fi";
import { MdForum, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { FaPoll } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import React from 'react'


export const links = [
    {
        title: 'Dashboard',
        links: [
            {
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
            name: 'Forums',
            url: 'forums',
            icon: <MdForum />,
          },
          {
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
                name: 'Feedback', 
                url: 'feedback',
                icon: <VscFeedback />
            }, 
        ]
    },

]