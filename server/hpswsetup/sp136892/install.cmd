REM The following is required in all INSTALL.CMD files
if exist c:\system.sav\util\SetVariables.cmd Call c:\system.sav\util\SetVariables.cmd
set version=1.03
Set block=%~dp0
CD /D "%block%"
REM Remove the REM from the next line if your component does not support Silent Install (Application Recovery)
REM Erase /F /Q *.CVA
REM Add the command-line to have your component to be installed properly

Pushd src
if not defined FCC_LOG_FOLDER goto BPS
Call ".\installdrv.cmd"
goto :END

:BPS
if exist ".\Uninstall.cmd" call ".\Uninstall.cmd"
if %errorlevel% NEQ 0 goto :END
if exist ".\InstallDrv.cmd" call ".\InstallDrv.cmd"
if %errorlevel% NEQ 0 goto :END
if exist ".\UWP\appxinst.cmd" call ".\UWP\appxinst.cmd"

:END
Popd
REM Erase failure flag file when install succeeded. Most applications return zero to indicate success.
ECHO %ERRORLEVEL% >> FAILURE.FLG
IF %ERRORLEVEL% EQU 0 ERASE /F /Q FAILURE.FLG
IF %ERRORLEVEL% EQU 3010 ERASE /F /Q FAILURE.FLG
EXIT /B %ERRORLEVEL%

