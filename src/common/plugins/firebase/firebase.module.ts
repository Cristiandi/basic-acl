import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { CompaniesModule } from 'src/modules/companies/companies.module';

@Module({
  imports: [CompaniesModule],
  providers: [FirebaseService],
  exports: [FirebaseService]
})
export class FirebaseModule {}
