import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
	LinkMsg,
	MediaMsg,
	TextMsg,
	Timeline,
	ReplyMsg,
	DocMsg,
} from "./MsgTypes";

const Message = ({ menu }) => {
	return (
		<Box p={3}>
			<Stack spacing={3}>
				{Chat_History.map((e) => {
					switch (e.type) {
						case "divider":
							//Timeline
							return <Timeline e={e} />;

						case "msg":
							switch (e.subtype) {
								case "img":
									// img msg
									return <MediaMsg e={e} menu={menu} />;
								case "doc":
									// doc msg
									return <DocMsg e={e} menu={menu} />;
								case "link":
									// link msg
									return <LinkMsg e={e} menu={menu} />;
								case "reply":
									//reply msg
									return <ReplyMsg e={e} menu={menu} />;
								default:
									// text msg
									return <TextMsg e={e} menu={menu} />;
							}
							break;

						default:
							return <></>;
					}
				})}
			</Stack>
		</Box>
	);
};

export default Message;
