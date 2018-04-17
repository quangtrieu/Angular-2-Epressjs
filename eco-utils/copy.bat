@echo off
set "c_path=%cd%"
for %%a in ("%c_path%") do set "p_dir=%%~dpa"

set "ecoAuthservice=%p_dir%ecoAuthservice\node_modules\eco-utils"
if not exist "%ecoAuthservice%" mkdir "%ecoAuthservice%"
robocopy "%c_path%" "%ecoAuthservice%" /MIR  /XD "%c_path%\node_modules"
echo copied to %ecoAuthservice%

REM set "job-service=%p_dir%job-service\node_modules\tceas-utils"
REM if not exist "%job-service%" mkdir "%job-service%"
REM robocopy "%c_path%" "%job-service%" /MIR  /XD "%c_path%\node_modules"
REM echo copied to %job-service%

REM set "masterData-service=%p_dir%masterData-service\node_modules\tceas-utils"
REM if not exist "%masterData-service%" mkdir "%masterData-service%"
REM robocopy "%c_path%" "%masterData-service%" /MIR  /XD "%c_path%\node_modules"
REM echo copied to %masterData-service%

REM set "part-service=%p_dir%part-service\node_modules\tceas-utils"
REM if not exist "%part-service%" mkdir "%part-service%"
REM robocopy "%c_path%" "%part-service%" /MIR  /XD "%c_path%\node_modules"
REM echo copied to %part-service%

REM set "repairOrder-service=%p_dir%repairOrder-service\node_modules\tceas-utils"
REM if not exist "%repairOrder-service%" mkdir "%repairOrder-service%"
REM robocopy "%c_path%" "%repairOrder-service%" /MIR  /XD "%c_path%\node_modules"
REM echo copied to %repairOrder-service%

REM set "servicePackage-service=%p_dir%servicePackage-service\node_modules\tceas-utils"
REM if not exist "%servicePackage-service%" mkdir "%servicePackage-service%"
REM robocopy "%c_path%" "%servicePackage-service%" /MIR  /XD "%c_path%\node_modules"
REM echo copied to %servicePackage-service%

@pause