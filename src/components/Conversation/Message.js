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

const Message = () => {
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
									return <MediaMsg e={e} />;
								case "doc":
									// doc msg
									return <DocMsg e={e} />;
								case "link":
									// link msg
									return <LinkMsg e={e} />;
								case "reply":
									//reply msg
									return <ReplyMsg e={e} />;
								default:
									// text msg
									return <TextMsg e={e} />;
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
