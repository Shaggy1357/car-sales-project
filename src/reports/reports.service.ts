import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { report } from 'process';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/CreateReport.dto';
import { ReportEntity } from './reports.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportRepo: Repository<ReportEntity>,
  ) {}

  create(reportDto: CreateReportDto) {
    const report = this.reportRepo.create(reportDto);
    return this.reportRepo.save(report);
  }
}
