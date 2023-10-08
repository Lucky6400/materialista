'use client';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import Image from "next/image";
import nextImage from '@/public/avatar.png'
import Notifications from "../icons/Notifications";
import AccountIcon from "../icons/Account";
import Settings from "../icons/Settings";

export default function Left() {
    return (
        <Card className="md:w-96 w-full">
            <CardHeader floated={false} className="h-80">
                <Image src={nextImage} className="object-cover h-full w-full" width={300} height={300} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Test user
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    CEO / Co-Founder
                </Typography>
                <List className="my-2 p-0 w-full">

                    <ListItem className="rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                        <ListItemPrefix>
                          <AccountIcon />
                        </ListItemPrefix>
                        Account
                    </ListItem>

                    <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                        <ListItemPrefix>
                            <Notifications />
                        </ListItemPrefix>
                        Notifications
                        <ListItemSuffix>
                            <Chip
                                value="+99"
                                variant="ghost"
                                size="sm"
                                className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
                            />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem className="rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                        <ListItemPrefix>
                            <Settings />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    
                </List>
            </CardBody>
        </Card>
    );
}