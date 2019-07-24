import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListDocComponent } from './Doctor/appointment-list-doc/appointment-list-doc.component';
import { PatientListDocComponent } from './Doctor/patient-list-doc/patient-list-doc.component';
import { PatientDetailDocComponent } from './Doctor/patient-detail-doc/patient-detail-doc.component';
import { PatientInvoiceDocComponent } from './Doctor/patient-invoice-doc/patient-invoice-doc.component';
import { SetPrescriptionDocComponent } from './Doctor/set-prescription-doc/set-prescription-doc.component';
import { AddAppointmentPatientComponent } from './Patient/add-appointment-patient/add-appointment-patient.component';
import { SeePrescriptionPatientComponent } from './Patient/see-prescription-patient/see-prescription-patient.component';
import { AppointmentListPatientComponent } from './Patient/appointment-list-patient/appointment-list-patient.component';
import { InvoiceListPatientComponent } from './Patient/invoice-list-patient/invoice-list-patient.component';
import { AddDeptAdminComponent } from './Admin/add-dept-admin/add-dept-admin.component';
import { RegisterDoctorAdminComponent } from './Admin/register-doctor-admin/register-doctor-admin.component';
import { DoctorListAdminComponent } from './Admin/doctor-list-admin/doctor-list-admin.component';
import { RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './Admin/dashboard-admin/dashboard-admin.component';
import { DashboardDoctorComponent } from './Doctor/dashboard-doctor/dashboard-doctor.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { SeeDepartmentListAdminComponent } from './Admin/see-department-list-admin/see-department-list-admin.component';
import { AddMedicineAdminComponent } from './Admin/add-medicine-admin/add-medicine-admin.component';
import { MedicineListAdminComponent } from './Admin/medicine-list-admin/medicine-list-admin.component';
import { InvoiceListAdminComponent } from './Admin/invoice-list-admin/invoice-list-admin.component';
import { AppointmentListAdminComponent } from './Admin/appointment-list-admin/appointment-list-admin.component';
import { AdminService } from './admin.service';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
import { AppointmentPatientComponent } from './Patient/appointment-patient/appointment-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentFormComponent,
    AppointmentListDocComponent,
    PatientListDocComponent,
    PatientDetailDocComponent,
    PatientInvoiceDocComponent,
    SetPrescriptionDocComponent,
    AddAppointmentPatientComponent,
    SeePrescriptionPatientComponent,
    AppointmentListPatientComponent,
    InvoiceListPatientComponent,
    AddDeptAdminComponent,
    RegisterDoctorAdminComponent,
    DoctorListAdminComponent,
    DashboardAdminComponent,
    DashboardDoctorComponent,
    PatientDashboardComponent,
    SeeDepartmentListAdminComponent,
    AddMedicineAdminComponent,
    MedicineListAdminComponent,
    InvoiceListAdminComponent,
    AppointmentListAdminComponent,
    AppointmentPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'add-dept-admin', component: AddDeptAdminComponent, canActivate:[AdminService]},
      { path: 'add-dept-admin', component: AddDeptAdminComponent, canActivate:[AdminService]},
      { path: 'doctor-list-admin', component: DoctorListAdminComponent, canActivate:[AdminService]},
      { path: 'register-doctor-admin', component: RegisterDoctorAdminComponent, canActivate:[AdminService]},
      { path: 'appointment-form', component: AppointmentFormComponent},
      { path: 'appointment-list-doc', component: AppointmentListDocComponent, canActivate:[DoctorService]},
      { path: 'patient-detail-doc', component: PatientDetailDocComponent, canActivate:[DoctorService]},
      { path: 'patient-invoice-doc', component: PatientInvoiceDocComponent, canActivate:[DoctorService]},
      { path: 'patient-list-doc', component: PatientListDocComponent, canActivate:[DoctorService]},
      { path: 'set-prescription-doc', component: SetPrescriptionDocComponent, canActivate:[DoctorService]},
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'add-appointment-patient', component: AddAppointmentPatientComponent, canActivate:[PatientService]},
      { path: 'appointment-list-patient', component: AppointmentListPatientComponent, canActivate:[PatientService]},
      { path: 'invoice-list-patient', component: InvoiceListPatientComponent, canActivate:[PatientService]},
      { path: 'see-precription-patient', component: SeePrescriptionPatientComponent, canActivate:[PatientService]},
      { path: 'home', component: HomeComponent},
      { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate:[AdminService]},
      { path: 'dashboard-doctor', component: DashboardDoctorComponent, canActivate:[DoctorService]},
      { path: 'patient-dashboard', component: PatientDashboardComponent, canActivate:[PatientService]},
      { path: 'see-department-list-admin', component: SeeDepartmentListAdminComponent, canActivate:[AdminService]},
      { path: 'add-medicine-admin', component: AddMedicineAdminComponent, canActivate:[AdminService]},
      { path: 'medicine-list-admin', component: MedicineListAdminComponent, canActivate:[AdminService]},
      { path: 'invoice-list-admin', component: InvoiceListAdminComponent, canActivate:[AdminService]},
      { path: 'appointment-list-admin', component: AppointmentListAdminComponent, canActivate:[AdminService]},
      { path: 'appointment-patient', component: AppointmentPatientComponent,canActivate: [PatientService]}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
