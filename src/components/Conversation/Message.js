import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
	return (
		<Box p={3}>
			<Stack spacing={3}>
				{Chat_History.map((e) => {
					switch (e.type) {
						case "divider":
							//Timeline
							return <Timeline e={e} />;
							break;
						case "message":
							switch (e.subtype) {
								case "img":
									// img msg
									break;
								case "doc":
									// doc msg
									break;
								case "link":
									// link msg
									break;
								case "reply":
									//reply msg
									break;

								default:
									<TextMsg />;
									break;
							}
							break;

						default:
							return <></>;
							break;
					}
				})}
			</Stack>
		</Box>
	);
};

export default Message;
