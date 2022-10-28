import { AiFillSecurityScan, AiOutlineSecurityScan, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser, FiUserPlus, FiShoppingBag } from "react-icons/fi";
import { GiAirplane, GiMoebiusTriangle } from "react-icons/gi";
import React from 'react'

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
            name: 'Dashboard',
            url: 'dashboard',
            icon: <FiShoppingBag />,
            },
        ],
    },
    {
        title: 'Users',
        links: [
            {
                name: 'User List',
                url: 'users',
                icon: <FiUser />
            }, 
            // {
            //     name: 'Add User',
            //     url: 'adduser',
            //     icon: <FiUserPlus />
            // }


        ]
    }, 
    {
        title: 'Handovers',
        links: [
          {
            name: 'Handover Items',
            url: 'handoveritems',
            icon: <AiOutlineShoppingCart />,
          },
          {
            name: 'Handovers',
            url: 'handovers',
            icon: <AiOutlineShoppingCart />,
          },

        ],
    },
    {
        title: 'Assessments',
        links: [
            {
                name: 'Preflight Assessments', 
                url: 'preflights',
                icon: <AiFillSecurityScan />
            }, 
            // {
            //     name: 'PRA Items',
            //     url: 'preflightriskassessmentitems',
            //     icon: <AiOutlineSecurityScan />
            // }
        ]
    },
    {
        title: 'Aircraft',
        links: [
            {
                name: 'Aircraft', 
                url: 'aircraft',
                icon: <GiAirplane />
            }, 
        ]
    },
    {
        title: 'Station',
        links: [
            {
                name: 'Stations', 
                url: 'stations',
                icon: <GiMoebiusTriangle />
            }, 
        ]
    },
]