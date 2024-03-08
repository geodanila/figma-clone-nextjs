"use client";

import { useOthers } from "../liveblocks.config";

export function CollaborativeApp() {
    const others = useOthers();
    const userCount = others.length;
    return (
        <div>            
            <p>There are {userCount} other users in this room</p>
        </div>
    );
}