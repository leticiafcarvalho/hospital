import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Container, Grid2, Paper } from '@mui/material';
import { styled } from '@mui/system';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 240,
    },
}));

const ContentStyled = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));

const ToolbarStyled = styled('div')(({ theme }) => theme.mixins.toolbar);

function Dashboard() {
    return (
        <div>
            <CssBaseline />
            <AppBarStyled position="fixed">
                <Toolbar>
                    <Typography variant="h6">Dashboard Admin</Typography>
                </Toolbar>
            </AppBarStyled>
            <DrawerStyled variant="permanent" anchor="left">
                <ToolbarStyled />
                <List>
                    <ListItem button>
                        <ListItemText primary="Usuários" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Configurações" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Relatórios" />
                    </ListItem>
                </List>
            </DrawerStyled>
            <ContentStyled>
                <ToolbarStyled />
                <Container>
                    <Grid2 container spacing={3}>
                        <Grid2 item xs={12} md={6}>
                            <Paper elevation={3}>
                                <h2>Estatísticas de Usuários</h2>
                                <p>Total de Usuários: 100</p>
                                <p>Usuários Ativos: 75</p>
                            </Paper>
                        </Grid2>
                        <Grid2 item xs={12} md={6}>
                            <Paper elevation={3}>
                                <h2>Relatórios Recentes</h2>
                                <p>Relatório 1: Concluído</p>
                                <p>Relatório 2: Pendente</p>
                            </Paper>
                        </Grid2>
                    </Grid2>
                </Container>
            </ContentStyled>
        </div>
    );
}

export default Dashboard;
