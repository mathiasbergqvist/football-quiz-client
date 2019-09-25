import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SportsSoccer from "@material-ui/icons/SportsSoccer";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        },
        title: {
            marginLeft: theme.spacing(2)
        },
        main: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(2)
        },
        footer: {
            padding: theme.spacing(2),
            marginTop: "auto",
            backgroundColor: "#e6e6e6",
            fontStyle: "Italic"
        }
    })
);

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <SportsSoccer />
                    <Typography variant="h6" className={classes.title}>
                        Football Quiz
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" className={classes.main} maxWidth="sm">
                {children}
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        "The ball is around and everything can happen" - Zlatan Ibrahimovic
                    </Typography>
                </Container>
            </footer>
            <style global jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: "Lato", sans-serif;
                    font-size: 16px;
                    color: #333;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>
        </div>
    );
};

export default Layout;
