import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((_theme: Theme) => ({
	root: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
	},
}));

export default useStyles;
