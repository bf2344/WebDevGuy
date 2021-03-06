import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    flexGrow: {
        flexGrow: 1,
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbar: {
        zIndex: 999,
        maxWidth: 1236,
        width: '100%',
        margin: '0 auto',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0, 8),
        },
    },
    navLink: {
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    },
    listItem: {
        cursor: 'pointer',
        '&:hover > .menu-item, &:hover svg': {
            color: theme.palette.primary.dark,
        },
        '&.menu-item--no-dropdown': {
            paddingRight: 0,
        },
    },
    listItemActive: {
        '&> .menu-item': {
            color: theme.palette.primary.dark,
        },
    },
    listItemText: {
        flex: '0 0 auto',
        marginRight: theme.spacing(2),
        whiteSpace: 'nowrap',
    },
    listItemButton: {
        whiteSpace: 'nowrap',
    },
    listItemIcon: {
        minWidth: 'auto',
    },
    popover: {
        padding: theme.spacing(4),
        border: theme.spacing(2),
        boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
        minWidth: 350,
        marginTop: theme.spacing(2),
    },
    iconButton: {
        marginLeft: theme.spacing(2),
        padding: 0,
        '&:hover': {
            background: 'transparent',
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: theme.palette.primary.dark,
    },
    logoContainer: {
        width: 100,
        height: 28,
        [theme.breakpoints.up('md')]: {
            width: 120,
            height: 32,
        },
    },
    logoImage: {
        width: '100%',
        height: '100%',
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuItem: {
        marginRight: theme.spacing(5),
        '&:last-child': {
            marginRight: 0,
        },
    },
    menuGroupItem: {
        paddingTop: 0,
    },
    menuGroupTitle: {
        textTransform: 'uppercase',
    },
    Typography: {
        color: '#F9B934',
        fontWeight: 700
    }
}));

export default useStyles;