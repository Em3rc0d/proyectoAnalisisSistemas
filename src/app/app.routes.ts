import { Routes } from '@angular/router';
import { GeneracionAvisosComponent } from './generacion-avisos/generacion-avisos.component';
import { GestionReunionesComponent } from './gestion-reuniones/gestion-reuniones.component';
import { IngresoOrdenesComponent } from './ingreso-ordenes/ingreso-ordenes.component';
import { RecepcionOrdenesComponent } from './recepcion-ordenes/recepcion-ordenes.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DetalleReunionComponent } from './detalle-reunion/detalle-reunion.component';
import { CreacionReunionesComponent } from './creacion-reuniones/creacion-reuniones.component';
import { ActualizarReunionesComponent } from './actualizar-reuniones/actualizar-reuniones.component';
import { EnviarAvisosComponent } from './enviar-avisos/enviar-avisos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PaginaPrincipalComponent},
    { path: 'generacion-avisos', component: GeneracionAvisosComponent},
    { path: 'gestion-reuniones', component: GestionReunionesComponent},
    { path: 'ingreso-ordenes', component: IngresoOrdenesComponent},
    { path: 'recepcion-ordenes', component: RecepcionOrdenesComponent},
    { path: 'detalle-reunion', component: DetalleReunionComponent},
    { path: 'creacion-reuniones', component: CreacionReunionesComponent},
    { path: 'actualizar-reuniones', component: ActualizarReunionesComponent},
    { path: 'enviar-avisos', component: EnviarAvisosComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
