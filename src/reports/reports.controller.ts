import { Controller, Post, Body } from '@nestjs/common';
import { CreateReportDto } from './dtos/CreateReport.dto';
import { ReportsService } from './reports.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  crearteReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(body);
  }
}
