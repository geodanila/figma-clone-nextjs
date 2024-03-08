import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

const LiveCursors = ({ others }: LiveCursorProps) => {
    return others.map(({connectionId, presence}) => {
        if (!presence?.cursor) return null;

        const cursorColor = COLORS[Number(connectionId) % COLORS.length];

        return (
            <Cursor 
                key={connectionId} 
                color={cursorColor} 
                x={presence.cursor.x}
                y={presence.cursor.y}
                message={presence.message}
            />
        );
    });
};

export default LiveCursors;