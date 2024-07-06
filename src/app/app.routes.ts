import { Routes } from '@angular/router';
import { GeneracionAvisosComponent } from './generacion-avisos/generacion-avisos.component';
import { GestionReunionesComponent } from './gestion-reuniones/gestion-reuniones.component';
import { IngresoOrdenesComponent } from './ingreso-ordenes/ingreso-ordenes.component';
import { RecepcionOrdenesComponent } from './recepcion-ordenes/recepcion-ordenes.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'generacion-avisos', component: GeneracionAvisosComponent},
    { path: 'gestion-reuniones', component: GestionReunionesComponent},
    { path: 'ingreso-ordenes', component: IngresoOrdenesComponent},
    { path: 'recepcion-ordenes', component: RecepcionOrdenesComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
